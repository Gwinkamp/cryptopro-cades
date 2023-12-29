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
import { unwrap } from './api/internal/unwrap';
import { CAPICOM_ENCODING_TYPE } from './constants';
import { CryptoError } from './errors';
import { parseCertificate } from './utils/certificateParser';
/**
 * Класс объекта Сертификата для удобной работы.
 * !!! НЕ является имплементацией @see ICertificate (к-ый является интерфейсом Крипто системы ОС).
 * @class Certificate
 */
var Certificate = /** @class */ (function () {
    /**
     * Приватный конструктор.
     * @param cfg сертификат из @see IStore.
     */
    function Certificate(cfg) {
        /**
         * Данные о владельце сертификата.
         * @remarks названия полей должны совпадать с @attributeOids в oids-dictionary.ts
         */
        this.subject = {
            commonName: null,
            surname: null,
            name: null,
            country: null,
            region: null,
            locality: null,
            street: null,
            organization: null,
            department: null,
            post: null,
            ogrnip: null,
            ogrn: null,
            snils: null,
            innLe: null,
            inn: null,
            email: null,
        };
        /**
         * Данные об издателе сертификата.
         * @remarks названия полей должны совпадать с @attributeOids в oids-dictionary.ts
         */
        this.issuer = {
            commonName: null,
            inn: null,
            innLe: null,
        };
        /**
         *  Отпечаток сертификата (хэш SHA-1).
         * @property {string|null}
         */
        this.thumbprint = null;
        /**
         *  Дата-время с которого сертификат вступает в силу.
         * @property {Date|null}
         */
        this.notBefore = null;
        /**
         * Дата-время до которого сертификат действует.
         * @property {Date|null}
         */
        this.notAfter = null;
        /**
         * Имя владельца сертификата.
         * @property {string|null}
         */
        this.subjectName = null;
        /**
         *  Идентификатор субъекта сертификата.
         * @property {string|null}
         */
        this.subjectKeyId = null;
        /**
         * Base64 строка открытой части сертификата.
         * @property {string|null}
         */
        this.certificateBase64Data = null;
        /**
         * Исходный сертификат из плагина.
         * @property {ICertificate|null}
         */
        this.certificateBin = null;
        /**
         * Имя криптопровайдера.
         * @property {string|null}
         */
        this.providerName = null;
        /**
         * Тип криптопровайдера.
         * @property {number|null}
         */
        this.providerType = null;
        /**
         * Есть ли закрытый ключ.
         * @property {boolean}
         */
        this.hasPrivateKey = false;
        /**
         * Гостовский ключ или нет.
         */
        this.isGost = false;
        /**
         * OID алгоритма ключа.
         */
        this.algorithm = null;
        this.certificateBin = cfg;
    }
    /**
     * Распарсить сертификат из исходного объекта.
     * @param {ICertificate} cert исходный сертификат.
     * @throws {CryptoError} в случае ошибки.
     * @returns {Promise<Certificate>} распрасенный сертификат.
     */
    Certificate.CreateFrom = function (cert) {
        return __awaiter(this, void 0, void 0, function () {
            var errorMessage, certificate, _a, _b, _c, _d, _e, _f, oPrivateKey, _g, _h, error_1;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (!cert) {
                            errorMessage = 'Не указаны данные исходного сертификата.';
                            throw CryptoError.create('CBP-7', errorMessage, null, errorMessage);
                        }
                        if (cert instanceof Certificate) {
                            return [2 /*return*/, cert];
                        }
                        certificate = new Certificate(cert);
                        _a = certificate;
                        return [4 /*yield*/, unwrap(cert.SubjectName)];
                    case 1:
                        _a.subjectName = _j.sent();
                        _b = certificate;
                        return [4 /*yield*/, unwrap(cert.Thumbprint)];
                    case 2:
                        _b.thumbprint = _j.sent();
                        _c = certificate;
                        return [4 /*yield*/, unwrap(cert.ValidToDate)];
                    case 3:
                        _c.notAfter = _j.sent();
                        _d = certificate;
                        return [4 /*yield*/, unwrap(cert.ValidFromDate)];
                    case 4:
                        _d.notBefore = _j.sent();
                        _e = certificate;
                        return [4 /*yield*/, unwrap(cert.Export(CAPICOM_ENCODING_TYPE.CAPICOM_ENCODE_BASE64))];
                    case 5:
                        _e.certificateBase64Data = _j.sent();
                        _j.label = 6;
                    case 6:
                        _j.trys.push([6, 11, , 12]);
                        _f = certificate;
                        return [4 /*yield*/, unwrap(cert.HasPrivateKey())];
                    case 7:
                        _f.hasPrivateKey = _j.sent();
                        return [4 /*yield*/, unwrap(cert.PrivateKey)];
                    case 8:
                        oPrivateKey = _j.sent();
                        _g = certificate;
                        return [4 /*yield*/, unwrap(oPrivateKey.ProviderName)];
                    case 9:
                        _g.providerName = _j.sent();
                        _h = certificate;
                        return [4 /*yield*/, unwrap(oPrivateKey.ProviderType)];
                    case 10:
                        _h.providerType = _j.sent();
                        return [3 /*break*/, 12];
                    case 11:
                        error_1 = _j.sent();
                        // ошибка не критична, просто создаем ошибку (в дебаге оно залогируется само)
                        CryptoError.createCadesError(error_1, "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u043C \u043A\u043B\u044E\u0447\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430 ".concat(certificate.thumbprint, "."));
                        certificate.hasPrivateKey = false;
                        return [3 /*break*/, 12];
                    case 12:
                        parseCertificate(certificate);
                        return [2 /*return*/, certificate];
                }
            });
        });
    };
    return Certificate;
}());
export { Certificate };
