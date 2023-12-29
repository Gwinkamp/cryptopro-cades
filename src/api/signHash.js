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
import { Buffer } from 'buffer';
import { CryptoError } from '../errors';
import { CADESCOM_CADES_TYPE, CADESCOM_HASH_ALGORITHM, CAPICOM_CERTIFICATE_INCLUDE_OPTION, CRYPTO_OBJECTS, GOST_KEY_ALGORITHM_TYPES, } from '../constants';
import { Certificate } from '../Certificate';
import { outputDebug } from '../utils';
import { afterPluginLoaded } from './internal/afterPluginLoaded';
import { createObject } from './createObject';
import { setCryptoProperty } from './internal/setCryptoProperty';
import { validateCertificate } from './validateCertificate';
import { unwrap } from './internal/unwrap';
/**
 * Выбрать алгоритм хэширования на основе алгоритма сертификата.
 * @param cert сертификат.
 * @throws {CryptoError} в случае неизвестного алгоритма сертификата.
 * @returns алгоритм хэширования.
 */
function selectAlgoritm(cert) {
    switch (cert.algorithm) {
        case GOST_KEY_ALGORITHM_TYPES.GOST_R3410_12_256:
            return CADESCOM_HASH_ALGORITHM.CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256;
        case GOST_KEY_ALGORITHM_TYPES.GOST_R3410_12_512:
            return CADESCOM_HASH_ALGORITHM.CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_512;
        default:
            var errorMessage = 'Неизвестный алгоритм ключа электронной подписи';
            throw CryptoError.create('CBP-7', errorMessage, null, errorMessage);
    }
}
/**
 * Подписать хэш указанным сертификатом в формате CMS.
 * @param {ICertificate | Certificate} certificate -сертификат пользователя.
 * @param {ArrayBuffer | string} data - данные для подписания. Массив байт хэша либо сам хэш в формате hex строки (в любом регистре)
 * @example
 *  4A5F6E54CA44064A5544943DDC244DDC84DC3952AC5924A475838E7BB8320878
 * @param {boolean} [includeCertChain=true] - включать в результат всю цепочку сертификатов.
 * @param {boolean} [doNotValidate=false] - не проводить валидацию сертификатов.
 * @throws {CryptoError} в случае ошибки.
 * @returns файл подписи в кодировке Base64.
 */
export function signHash(certificate, data, includeCertChain, doNotValidate) {
    var _this = this;
    if (includeCertChain === void 0) { includeCertChain = true; }
    if (doNotValidate === void 0) { doNotValidate = false; }
    return afterPluginLoaded(function () { return __awaiter(_this, void 0, void 0, function () {
        var logData, errorMessage, errorMessage, hexString, cadesCert, cert, errorMessage, hashedData, signer, signedData, error_1, signResult, error_2, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logData = [];
                    logData.push({
                        certificate: certificate,
                        data: data,
                        includeCertChain: includeCertChain,
                        doNotValidate: doNotValidate,
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 21, 22, 23]);
                    if (!data) {
                        errorMessage = 'Не указаны хэш для подписания.';
                        throw CryptoError.create('CBP-7', errorMessage, null, errorMessage);
                    }
                    if (!certificate) {
                        errorMessage = 'Не указан сертификат для вычисления электронной подписи.';
                        throw CryptoError.create('CBP-7', errorMessage, null, errorMessage);
                    }
                    hexString = data instanceof ArrayBuffer ? Buffer.from(data).toString('hex') : data;
                    logData.push({ hexString: hexString });
                    cadesCert = null;
                    cert = null;
                    if (!(certificate instanceof Certificate)) return [3 /*break*/, 2];
                    cadesCert = certificate === null || certificate === void 0 ? void 0 : certificate.certificateBin;
                    cert = certificate;
                    return [3 /*break*/, 4];
                case 2:
                    cadesCert = certificate;
                    return [4 /*yield*/, Certificate.CreateFrom(cadesCert)];
                case 3:
                    cert = _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(!doNotValidate && !!cadesCert)) return [3 /*break*/, 6];
                    return [4 /*yield*/, validateCertificate(cadesCert)];
                case 5:
                    errorMessage = _a.sent();
                    if (errorMessage) {
                        throw CryptoError.create('CBP-6', 'Сертификат не прошел проверку при подписи.', null, errorMessage);
                    }
                    _a.label = 6;
                case 6: return [4 /*yield*/, createObject(CRYPTO_OBJECTS.hashedData)];
                case 7:
                    hashedData = _a.sent();
                    return [4 /*yield*/, createObject(CRYPTO_OBJECTS.signer)];
                case 8:
                    signer = _a.sent();
                    return [4 /*yield*/, createObject(CRYPTO_OBJECTS.signedData)];
                case 9:
                    signedData = _a.sent();
                    _a.label = 10;
                case 10:
                    _a.trys.push([10, 16, , 17]);
                    return [4 /*yield*/, setCryptoProperty(signer, 'Certificate', cadesCert)];
                case 11:
                    _a.sent();
                    if (!includeCertChain) return [3 /*break*/, 13];
                    return [4 /*yield*/, setCryptoProperty(signer, 'Options', CAPICOM_CERTIFICATE_INCLUDE_OPTION.CAPICOM_CERTIFICATE_INCLUDE_WHOLE_CHAIN)];
                case 12:
                    _a.sent();
                    _a.label = 13;
                case 13: return [4 /*yield*/, setCryptoProperty(hashedData, 'Algorithm', selectAlgoritm(cert))];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, unwrap(hashedData.SetHashValue(hexString))];
                case 15:
                    _a.sent();
                    return [3 /*break*/, 17];
                case 16:
                    error_1 = _a.sent();
                    throw CryptoError.createCadesError(error_1, 'Ошибка при заполнении параметров подписания.');
                case 17:
                    _a.trys.push([17, 19, , 20]);
                    return [4 /*yield*/, unwrap(signedData.SignHash(hashedData, signer, CADESCOM_CADES_TYPE.CADESCOM_CADES_BES))];
                case 18:
                    signResult = _a.sent();
                    logData.push({ signResult: signResult });
                    return [2 /*return*/, signResult];
                case 19:
                    error_2 = _a.sent();
                    throw CryptoError.createCadesError(error_2, 'Ошибка при вычислении электронной подписи.');
                case 20: return [3 /*break*/, 23];
                case 21:
                    error_3 = _a.sent();
                    logData.push({ error: error_3 });
                    throw error_3;
                case 22:
                    outputDebug('signHash >>', logData);
                    return [7 /*endfinally*/];
                case 23: return [2 /*return*/];
            }
        });
    }); })();
}
