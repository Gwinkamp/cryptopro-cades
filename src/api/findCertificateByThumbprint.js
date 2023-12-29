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
import { CAPICOM_CERTIFICATE_FIND_TYPE } from '../constants';
import { Certificate } from '../Certificate';
import { CryptoError } from '../errors';
import { openStore } from './openStore';
import { unwrap } from './internal/unwrap';
/**
 * Поиск в хранилищах сертификата.
 * @param {string} thumbprint -отпечаток искомого сертификата.
 * @throws {CryptoError} в случае ошибки.
 * @returns {Promise<Certificate | undefined>} сертификат.
 */
export function findCertificateByThumbprint(thumbprint) {
    return __awaiter(this, void 0, void 0, function () {
        var errorMessage, store, certificates, certFind, cert, _a, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!thumbprint) {
                        errorMessage = 'Не указан отпечаток искомого сертификата.';
                        throw CryptoError.create('CBP-7', errorMessage, null, errorMessage);
                    }
                    store = null;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 9, 10, 12]);
                    return [4 /*yield*/, openStore()];
                case 2:
                    store = _b.sent();
                    return [4 /*yield*/, unwrap(store.Certificates)];
                case 3:
                    certificates = _b.sent();
                    return [4 /*yield*/, unwrap(certificates.Find(CAPICOM_CERTIFICATE_FIND_TYPE.CAPICOM_CERTIFICATE_FIND_SHA1_HASH, thumbprint))];
                case 4:
                    certFind = _b.sent();
                    return [4 /*yield*/, unwrap(certFind.Item(1))];
                case 5:
                    cert = _b.sent();
                    if (!cert) return [3 /*break*/, 7];
                    return [4 /*yield*/, Certificate.CreateFrom(cert)];
                case 6:
                    _a = _b.sent();
                    return [3 /*break*/, 8];
                case 7:
                    _a = undefined;
                    _b.label = 8;
                case 8: return [2 /*return*/, _a];
                case 9:
                    err_1 = _b.sent();
                    throw CryptoError.createCadesError(err_1, 'Ошибка получения сертификата.');
                case 10: return [4 /*yield*/, unwrap(store === null || store === void 0 ? void 0 : store.Close())];
                case 11:
                    _b.sent();
                    return [7 /*endfinally*/];
                case 12: return [2 /*return*/];
            }
        });
    });
}
