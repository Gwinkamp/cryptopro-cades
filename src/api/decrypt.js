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
import { CADESCOM_BASE64_TO_BINARY, CRYPTO_OBJECTS } from '../constants';
import { outputDebug } from '../utils';
import { createObject } from './createObject';
import { afterPluginLoaded } from './internal/afterPluginLoaded';
import { setCryptoProperty } from './internal/setCryptoProperty';
import { unwrap } from './internal/unwrap';
/**
 * Расшифровать данные.
 * @param {string} encryptedData - данные для расшифрования. Массив байт либо массив байт в формате Base64 строки.
 * @throws {CryptoError} в случае ошибки.
 * @returns {Promise<string>} .Расшифрованная строка в кодировке Base64.
 */
export function decrypt(encryptedData) {
    var _this = this;
    return afterPluginLoaded(function () { return __awaiter(_this, void 0, void 0, function () {
        var logData, errorMessage, base64String, envelopedData, err_1, decryptedData, err_2, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logData = [];
                    logData.push({ encryptedData: encryptedData });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 11, 12, 13]);
                    if (!encryptedData) {
                        errorMessage = 'Не указаны данные для расшифровки.';
                        throw CryptoError.create('CBP-7', errorMessage, null, errorMessage);
                    }
                    base64String = encryptedData instanceof ArrayBuffer
                        ? Buffer.from(encryptedData).toString('base64')
                        : encryptedData;
                    logData.push({ base64String: base64String });
                    return [4 /*yield*/, createObject(CRYPTO_OBJECTS.envelopedData)];
                case 2:
                    envelopedData = _a.sent();
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    // в криптопро браузер плагине не поддерживается подпись/расшифровка бинарных данных,
                    // поэтому подписываем предварительно конвертированный в Base64
                    return [4 /*yield*/, setCryptoProperty(envelopedData, 'ContentEncoding', CADESCOM_BASE64_TO_BINARY)];
                case 4:
                    // в криптопро браузер плагине не поддерживается подпись/расшифровка бинарных данных,
                    // поэтому подписываем предварительно конвертированный в Base64
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    throw CryptoError.createCadesError(err_1, 'Ошибка при заполнении параметров расшифровки.');
                case 6:
                    _a.trys.push([6, 9, , 10]);
                    // в криптопро браузер плагине не поддерживается подпись/расшифровка бинарных данных,
                    // поэтому расшифровываем предварительно конвертированный в Base64
                    return [4 /*yield*/, unwrap(envelopedData.Decrypt(base64String))];
                case 7:
                    // в криптопро браузер плагине не поддерживается подпись/расшифровка бинарных данных,
                    // поэтому расшифровываем предварительно конвертированный в Base64
                    _a.sent();
                    return [4 /*yield*/, unwrap(envelopedData.Content)];
                case 8:
                    decryptedData = _a.sent();
                    logData.push({ decryptedData: decryptedData });
                    return [2 /*return*/, decryptedData];
                case 9:
                    err_2 = _a.sent();
                    throw CryptoError.createCadesError(err_2, 'Ошибка при расшифровке данных.');
                case 10: return [3 /*break*/, 13];
                case 11:
                    error_1 = _a.sent();
                    logData.push({ error: error_1 });
                    throw error_1;
                case 12:
                    outputDebug('decrypt >>', logData);
                    return [7 /*endfinally*/];
                case 13: return [2 /*return*/];
            }
        });
    }); })();
}
