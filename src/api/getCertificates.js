var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { CAPICOM_MY_STORE, CAPICOM_STORE_OPEN_MODE, STORE_LOCATION, STORE_TYPE, } from '../constants';
import { Certificate } from '../Certificate';
import { outputDebug } from '../utils';
import { CryptoError } from '../errors';
import { afterPluginLoaded } from './internal/afterPluginLoaded';
import { openStore } from './openStore';
import { unwrap } from './internal/unwrap';
/**
 * Кэш из запрошенных сертификатов.
 */
var certificatesCache = {};
/**
 * Возвращает список сертификатов из указанного хранилища.
 * @param {IStore} store Хранилище
 * @throws {CryptoError} в случае ошибки.
 * @returns {Promise<Certificate[]>} .Список сертификатов.
 */
function getCertificatesFromStore(store) {
    return __awaiter(this, void 0, void 0, function () {
        var errorMessage, result, certificates, certificatesCount, err_1, certBin, cert, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!store) {
                        errorMessage = 'Не задано хранилище сертификатов.';
                        throw CryptoError.create('CBP-7', errorMessage, null, errorMessage);
                    }
                    result = [];
                    certificatesCount = 0;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, unwrap(store.Certificates)];
                case 2:
                    certificates = _a.sent();
                    return [4 /*yield*/, unwrap(certificates.Count)];
                case 3:
                    certificatesCount = _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    throw CryptoError.createCadesError(err_1, 'Ошибка получения списка сертификатов.');
                case 5:
                    if (!certificatesCount) return [3 /*break*/, 11];
                    _a.label = 6;
                case 6:
                    _a.trys.push([6, 9, , 10]);
                    return [4 /*yield*/, unwrap(certificates.Item(certificatesCount--))];
                case 7:
                    certBin = _a.sent();
                    return [4 /*yield*/, Certificate.CreateFrom(certBin)];
                case 8:
                    cert = _a.sent();
                    // работаем только с гостовскими сертами
                    if (cert.isGost) {
                        result.push(cert);
                    }
                    return [3 /*break*/, 10];
                case 9:
                    err_2 = _a.sent();
                    // не критичная ошибка, просто логируем
                    CryptoError.createCadesError(err_2, 'Ошибка получения сертификата.');
                    return [3 /*break*/, 10];
                case 10: return [3 /*break*/, 5];
                case 11: return [2 /*return*/, result];
            }
        });
    });
}
/**
 * Получить сертификаты из USB токенов.
 * @throws {CryptoError} в случае ошибки.
 * @returns {Promise<Certificate[]>} .Список сертификатов из USB токенов.
 */
function ReadCertificatesFromUsbToken() {
    return __awaiter(this, void 0, void 0, function () {
        var store;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    store = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 4, 6]);
                    return [4 /*yield*/, openStore(STORE_LOCATION.CADESCOM_CONTAINER_STORE)];
                case 2:
                    store = _a.sent();
                    return [4 /*yield*/, getCertificatesFromStore(store)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [4 /*yield*/, (store === null || store === void 0 ? void 0 : store.Close())];
                case 5:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
/**
 * Получить сертификаты из реестра.
 * @throws {CryptoError} в случае ошибки.
 * @returns {Promise<Certificate[]>} .Список сертификатов из реестра.
 */
function ReadCertificatesFromRegistry() {
    return __awaiter(this, void 0, void 0, function () {
        var store;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    store = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 4, 6]);
                    return [4 /*yield*/, openStore(STORE_LOCATION.CAPICOM_CURRENT_USER_STORE, CAPICOM_MY_STORE, CAPICOM_STORE_OPEN_MODE.CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED)];
                case 2:
                    store = _a.sent();
                    return [4 /*yield*/, getCertificatesFromStore(store)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [4 /*yield*/, (store === null || store === void 0 ? void 0 : store.Close())];
                case 5:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
/**
 * Возвращает список валидных доступных для работы сертификатов.
 *
 * @param {STORE_TYPE} storeType из какого хранилища требуется получить сертификаты (из токена, реестра, все...).
 * @param {resetCache} resetCache перезапросить данные, игнорируя закэшированные данные.
 * @throws {CryptoError} в случае ошибки.
 * @returns {Promise<Certificate[]>} .сертификаты.
 */
export function getCertificates(storeType, resetCache) {
    var _this = this;
    if (storeType === void 0) { storeType = STORE_TYPE.ALL; }
    if (resetCache === void 0) { resetCache = false; }
    if (certificatesCache[storeType] && !resetCache) {
        return Promise.resolve(certificatesCache[storeType]);
    }
    return afterPluginLoaded(function () { return __awaiter(_this, void 0, void 0, function () {
        var logData, result, _a, usbTokenCertificates, certificatesFromRegistry, store, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (certificatesCache[storeType] && !resetCache) {
                        return [2 /*return*/, certificatesCache[storeType]];
                    }
                    logData = [];
                    result = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 17, 18, 19]);
                    _a = storeType;
                    switch (_a) {
                        case STORE_TYPE.USB_TOKEN: return [3 /*break*/, 2];
                        case STORE_TYPE.REGISTRY: return [3 /*break*/, 4];
                        case STORE_TYPE.ALL: return [3 /*break*/, 6];
                    }
                    return [3 /*break*/, 9];
                case 2: return [4 /*yield*/, ReadCertificatesFromUsbToken()];
                case 3:
                    result = _b.sent();
                    logData.push({ storeType: storeType, result: result });
                    return [3 /*break*/, 16];
                case 4: return [4 /*yield*/, ReadCertificatesFromRegistry()];
                case 5:
                    result = _b.sent();
                    logData.push({ storeType: storeType, result: result });
                    return [3 /*break*/, 16];
                case 6: return [4 /*yield*/, ReadCertificatesFromUsbToken()];
                case 7:
                    usbTokenCertificates = _b.sent();
                    logData.push({ storeType: 'usb', usbTokenCertificates: usbTokenCertificates });
                    return [4 /*yield*/, ReadCertificatesFromRegistry()];
                case 8:
                    certificatesFromRegistry = _b.sent();
                    logData.push({ storeType: 'registry', certificatesFromRegistry: certificatesFromRegistry });
                    result = usbTokenCertificates.concat(certificatesFromRegistry);
                    result = result.filter(function (cert, index) {
                        return result.findIndex(function (c) { return c.thumbprint === cert.thumbprint; }) ===
                            index;
                    });
                    return [3 /*break*/, 16];
                case 9:
                    store = null;
                    _b.label = 10;
                case 10:
                    _b.trys.push([10, , 13, 15]);
                    return [4 /*yield*/, openStore()];
                case 11:
                    store = _b.sent();
                    return [4 /*yield*/, getCertificatesFromStore(store)];
                case 12:
                    result = _b.sent();
                    logData.push({ storeType: 'default', result: result });
                    return [3 /*break*/, 15];
                case 13: return [4 /*yield*/, (store === null || store === void 0 ? void 0 : store.Close())];
                case 14:
                    _b.sent();
                    return [7 /*endfinally*/];
                case 15: return [3 /*break*/, 16];
                case 16: return [3 /*break*/, 19];
                case 17:
                    error_1 = _b.sent();
                    logData.push({ error: error_1 });
                    throw error_1;
                case 18:
                    logData.push({ result: result });
                    outputDebug("getCertificates(".concat(storeType, ") >>"), logData);
                    return [7 /*endfinally*/];
                case 19: return [2 /*return*/, (certificatesCache[storeType] = result)];
            }
        });
    }); })();
}
