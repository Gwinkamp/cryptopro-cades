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
import { CADESCOM_XML_SIGNATURE_TYPE, CRYPTO_OBJECTS, GOST_KEY_ALGORITHM_TYPES, XML_SIGNATURE_GOST_ALGORITHM_TYPE, } from '../constants';
import { Certificate } from '../Certificate';
import { outputDebug } from '../utils';
import { afterPluginLoaded } from './internal/afterPluginLoaded';
import { createObject } from './createObject';
import { setCryptoProperty } from './internal/setCryptoProperty';
import { validateCertificate } from './validateCertificate';
import { unwrap } from './internal/unwrap';
/**
 * Получить алгоритм вычисления подписи для Xml.
 * @param {Certificate} certificate сертификат.
 * @throws {CryptoError} в случае ошибки.
 * @returns {string} алгоритм вычисления подписи.
 */
export var getXmlSignAlgorithmType = function (certificate) {
    switch (certificate.algorithm) {
        case GOST_KEY_ALGORITHM_TYPES.GOST_R3410_12_256:
            return XML_SIGNATURE_GOST_ALGORITHM_TYPE.XmlDsigGost3410Url2012256;
        case GOST_KEY_ALGORITHM_TYPES.GOST_R3410_12_512:
            return XML_SIGNATURE_GOST_ALGORITHM_TYPE.XmlDsigGost3410Url2012512;
        default:
            throw CryptoError.create('CBP-9', "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C (".concat(certificate.algorithm, ") \u043F\u0440\u0438 \u0432\u044B\u0431\u043E\u0440\u0435 \u0442\u0438\u043F\u0430 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u0438 XmlDSig."), null);
    }
};
/**
 * Получить алгоритм вычисления хэша.
 * @param {Certificate} certificate сертификат.
 * @throws {CryptoError} в случае ошибки.
 * @returns {string} алгоритм вычисления хэша.
 */
export var getXmlHashAlgorithmType = function (certificate) {
    switch (certificate.algorithm) {
        case GOST_KEY_ALGORITHM_TYPES.GOST_R3410_12_256:
            return XML_SIGNATURE_GOST_ALGORITHM_TYPE.XmlDsigGost3411Url2012256;
        case GOST_KEY_ALGORITHM_TYPES.GOST_R3410_12_512:
            return XML_SIGNATURE_GOST_ALGORITHM_TYPE.XmlDsigGost3411Url2012512;
        default:
            throw CryptoError.create('CBP-9', "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C (".concat(certificate.algorithm, ") \u043F\u0440\u0438 \u0432\u044B\u0431\u043E\u0440\u0435 \u0442\u0438\u043F\u0430 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u0430 \u0445\u044D\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F xml."), null);
    }
};
/**
 * Подписать входные данные указанным сертификатом в формате XmlDSig.
 * @param {ICertificate | Certificate} certificate -сертификат пользователя.
 * @param {ArrayBuffer | string} data - данные для подписания. Массив байт либо массив байт в формате Base64 строки.
 * @param {CADESCOM_XML_SIGNATURE_TYPE} xmlSignatureType - тип xml подписи.
 * @param {boolean} [doNotValidate=false] - не проводить валидацию сертификата.
 * @throws {CryptoError} в случае ошибки.
 * @returns файл подписи в кодировке Base64.
 */
export var signXml = function (certificate, data, xmlSignatureType, doNotValidate) {
    if (xmlSignatureType === void 0) { xmlSignatureType = CADESCOM_XML_SIGNATURE_TYPE.CADESCOM_XML_SIGNATURE_TYPE_ENVELOPED; }
    if (doNotValidate === void 0) { doNotValidate = false; }
    return afterPluginLoaded(function () { return __awaiter(void 0, void 0, void 0, function () {
        var logData, errorMessage, errorMessage, base64String, cert, _a, errorMessage, signer, signedData, err_1, signResult, error_1, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    logData = [];
                    logData.push({ certificate: certificate, data: data, xmlSignatureType: xmlSignatureType, doNotValidate: doNotValidate });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 20, 21, 22]);
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
                    if (!(certificate instanceof Certificate)) return [3 /*break*/, 2];
                    _a = certificate;
                    return [3 /*break*/, 4];
                case 2: // парсим если пришло сырое
                return [4 /*yield*/, Certificate.CreateFrom(certificate)];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4:
                    cert = _a;
                    if (!(!doNotValidate && !!cert)) return [3 /*break*/, 6];
                    return [4 /*yield*/, validateCertificate(cert)];
                case 5:
                    errorMessage = _b.sent();
                    if (errorMessage) {
                        throw CryptoError.create('CBP-6', 'Сертификат не прошел проверку при подписи.', null, errorMessage);
                    }
                    _b.label = 6;
                case 6: return [4 /*yield*/, createObject(CRYPTO_OBJECTS.signer)];
                case 7:
                    signer = _b.sent();
                    return [4 /*yield*/, createObject(CRYPTO_OBJECTS.signedXml)];
                case 8:
                    signedData = _b.sent();
                    _b.label = 9;
                case 9:
                    _b.trys.push([9, 15, , 16]);
                    return [4 /*yield*/, setCryptoProperty(signer, 'Certificate', cert.certificateBin)];
                case 10:
                    _b.sent();
                    // в криптопро браузер плагине не поддерживается подпись/расшифровка бинарных данных,
                    // поэтому подписываем предварительно конвертированный в Base64
                    return [4 /*yield*/, setCryptoProperty(signedData, 'Content', base64String)];
                case 11:
                    // в криптопро браузер плагине не поддерживается подпись/расшифровка бинарных данных,
                    // поэтому подписываем предварительно конвертированный в Base64
                    _b.sent();
                    // указываем тип подписи
                    return [4 /*yield*/, setCryptoProperty(signedData, 'SignatureType', xmlSignatureType)];
                case 12:
                    // указываем тип подписи
                    _b.sent();
                    // указываем алгоритм подписи
                    return [4 /*yield*/, setCryptoProperty(signedData, 'SignatureMethod', getXmlSignAlgorithmType(cert))];
                case 13:
                    // указываем алгоритм подписи
                    _b.sent();
                    // указываем алгоритм хэширования
                    return [4 /*yield*/, setCryptoProperty(signedData, 'DigestMethod', getXmlHashAlgorithmType(cert))];
                case 14:
                    // указываем алгоритм хэширования
                    _b.sent();
                    return [3 /*break*/, 16];
                case 15:
                    err_1 = _b.sent();
                    throw CryptoError.createCadesError(err_1, 'Ошибка при заполнении параметров подписания.');
                case 16:
                    _b.trys.push([16, 18, , 19]);
                    return [4 /*yield*/, unwrap(signedData.Sign(signer))];
                case 17:
                    signResult = _b.sent();
                    logData.push({ signResult: signResult });
                    return [2 /*return*/, signResult];
                case 18:
                    error_1 = _b.sent();
                    throw CryptoError.createCadesError(error_1, 'Ошибка при вычислении электронной подписи.');
                case 19: return [3 /*break*/, 22];
                case 20:
                    error_2 = _b.sent();
                    logData.push({ error: error_2 });
                    throw error_2;
                case 21:
                    outputDebug('signXml >>', logData);
                    return [7 /*endfinally*/];
                case 22: return [2 /*return*/];
            }
        });
    }); })();
};
