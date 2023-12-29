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
import { CADESCOM_BASE64_TO_BINARY, CADESCOM_CADES_TYPE, CAPICOM_CERTIFICATE_INCLUDE_OPTION, CRYPTO_OBJECTS, } from '../constants';
import { Certificate } from '../Certificate';
import { outputDebug } from '../utils';
import { afterPluginLoaded } from './internal/afterPluginLoaded';
import { createObject } from './createObject';
import { setCryptoProperty } from './internal/setCryptoProperty';
import { validateCertificate } from './validateCertificate';
import { unwrap } from './internal/unwrap';
/**
 * Подписать входные данные указанным сертификатом в формате CMS.
 * @param {ICertificate | Certificate} certificate -сертификат пользователя.
 * @param {ArrayBuffer | string} data - данные для подписания. Массив байт либо массив байт в формате Base64 строки.
 * @param {boolean} [detach=true] присоединять подпись к данным или отдельно?
 * @param {boolean} [includeCertChain=true] - включать в результат всю цепочку сертификатов.
 * @param {boolean} [doNotValidate=false] - не проводить валидацию сертификатов.
 * @throws {CryptoError} в случае ошибки.
 * @returns файл подписи в кодировке Base64.
 */
export function sign(certificate, data, detach, includeCertChain, doNotValidate) {
    var _this = this;
    if (detach === void 0) { detach = true; }
    if (includeCertChain === void 0) { includeCertChain = true; }
    if (doNotValidate === void 0) { doNotValidate = false; }
    return afterPluginLoaded(function () { return __awaiter(_this, void 0, void 0, function () {
        var logData, errorMessage, errorMessage, base64String, cert, errorMessage, signer, signedData, error_1, signResult, error_2, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logData = [];
                    logData.push({
                        certificate: certificate,
                        data: data,
                        detach: detach,
                        includeCertChain: includeCertChain,
                        doNotValidate: doNotValidate,
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 17, 18, 19]);
                    if (!data) {
                        errorMessage = 'Не указаны данные для подписания.';
                        throw CryptoError.create('CBP-7', errorMessage, null, errorMessage);
                    }
                    if (!certificate) {
                        errorMessage = 'Не указан сертификат для вычисления электронной подписи.';
                        throw CryptoError.create('CBP-7', errorMessage, null, errorMessage);
                    }
                    base64String = data instanceof ArrayBuffer
                        ? Buffer.from(data).toString('base64')
                        : data;
                    logData.push({ base64String: base64String });
                    cert = null;
                    if (certificate instanceof Certificate) {
                        cert = certificate === null || certificate === void 0 ? void 0 : certificate.certificateBin;
                    }
                    else {
                        cert = certificate;
                    }
                    if (!(!doNotValidate && !!cert)) return [3 /*break*/, 3];
                    return [4 /*yield*/, validateCertificate(cert)];
                case 2:
                    errorMessage = _a.sent();
                    if (errorMessage) {
                        throw CryptoError.create('CBP-6', 'Сертификат не прошел проверку при подписи.', null, errorMessage);
                    }
                    _a.label = 3;
                case 3: return [4 /*yield*/, createObject(CRYPTO_OBJECTS.signer)];
                case 4:
                    signer = _a.sent();
                    return [4 /*yield*/, createObject(CRYPTO_OBJECTS.signedData)];
                case 5:
                    signedData = _a.sent();
                    _a.label = 6;
                case 6:
                    _a.trys.push([6, 12, , 13]);
                    return [4 /*yield*/, setCryptoProperty(signer, 'Certificate', cert)];
                case 7:
                    _a.sent();
                    if (!includeCertChain) return [3 /*break*/, 9];
                    return [4 /*yield*/, setCryptoProperty(signer, 'Options', CAPICOM_CERTIFICATE_INCLUDE_OPTION.CAPICOM_CERTIFICATE_INCLUDE_WHOLE_CHAIN)];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [4 /*yield*/, setCryptoProperty(signedData, 'ContentEncoding', CADESCOM_BASE64_TO_BINARY)];
                case 10:
                    _a.sent();
                    // в криптопро браузер плагине не поддерживается подпись/расшифровка бинарных данных,
                    // поэтому подписываем предварительно конвертированный в Base64
                    return [4 /*yield*/, setCryptoProperty(signedData, 'Content', base64String)];
                case 11:
                    // в криптопро браузер плагине не поддерживается подпись/расшифровка бинарных данных,
                    // поэтому подписываем предварительно конвертированный в Base64
                    _a.sent();
                    return [3 /*break*/, 13];
                case 12:
                    error_1 = _a.sent();
                    throw CryptoError.createCadesError(error_1, 'Ошибка при заполнении параметров подписания.');
                case 13:
                    _a.trys.push([13, 15, , 16]);
                    return [4 /*yield*/, unwrap(signedData.SignCades(signer, CADESCOM_CADES_TYPE.CADESCOM_CADES_BES, detach))];
                case 14:
                    signResult = _a.sent();
                    logData.push({ signResult: signResult });
                    return [2 /*return*/, signResult];
                case 15:
                    error_2 = _a.sent();
                    throw CryptoError.createCadesError(error_2, 'Ошибка при вычислении электронной подписи.');
                case 16: return [3 /*break*/, 19];
                case 17:
                    error_3 = _a.sent();
                    logData.push({ error: error_3 });
                    throw error_3;
                case 18:
                    outputDebug('sign >>', logData);
                    return [7 /*endfinally*/];
                case 19: return [2 /*return*/];
            }
        });
    }); })();
}
