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
import { CRYPTO_OBJECTS } from '../constants';
import { outputDebug } from '../utils';
import pluginConfig from '../PluginConfig';
import { afterPluginLoaded } from './internal/afterPluginLoaded';
import { createObject } from './createObject';
import { unwrap } from './internal/unwrap';
/**
 * Кэш из запрошенных сертификатов.
 */
var cryptoProvidersCache;
/**
 * Получить список криптопровайдеров.
 * @throws {CryptoError} в случае ошибки.
 * @returns {Promise<ICryptoProvider[]>} Bнформация о типе, наименовании и версии криптопровайдеров.
 */
export function getCryptoProviders(resetCache) {
    var _this = this;
    if (resetCache === void 0) { resetCache = false; }
    if (cryptoProvidersCache && !resetCache) {
        return Promise.resolve(cryptoProvidersCache);
    }
    return afterPluginLoaded(function () { return __awaiter(_this, void 0, void 0, function () {
        var availableCryptoProviders, logData, _i, _a, _b, ProviderType, ProviderName, cadesAbout, cspVersion, _c, _d, error_1, error_2;
        var _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    if (cryptoProvidersCache && !resetCache) {
                        return [2 /*return*/, Promise.resolve(cryptoProvidersCache)];
                    }
                    availableCryptoProviders = [];
                    logData = [];
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, 12, 13, 14]);
                    _i = 0, _a = pluginConfig.CheckCryptoProviders;
                    _f.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 11];
                    _b = _a[_i], ProviderType = _b.ProviderType, ProviderName = _b.ProviderName;
                    _f.label = 3;
                case 3:
                    _f.trys.push([3, 9, , 10]);
                    return [4 /*yield*/, createObject(CRYPTO_OBJECTS.about)];
                case 4:
                    cadesAbout = _f.sent();
                    return [4 /*yield*/, unwrap(cadesAbout.CSPVersion(ProviderName, ProviderType))];
                case 5:
                    cspVersion = _f.sent();
                    _d = (_c = availableCryptoProviders).push;
                    _e = {
                        ProviderName: ProviderName,
                        ProviderType: ProviderType
                    };
                    return [4 /*yield*/, unwrap(cspVersion.BuildVersion)];
                case 6:
                    _e.BuildVersion = _f.sent();
                    return [4 /*yield*/, unwrap(cspVersion.MajorVersion)];
                case 7:
                    _e.MajorVersion = _f.sent();
                    return [4 /*yield*/, unwrap(cspVersion.MinorVersion)];
                case 8:
                    _d.apply(_c, [(_e.MinorVersion = _f.sent(),
                            _e)]);
                    return [3 /*break*/, 10];
                case 9:
                    error_1 = _f.sent();
                    logData.push({
                        errorMessage: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u043A\u0440\u0438\u043F\u0442\u043E\u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0435 ".concat(ProviderName, " \u0441 \u0442\u0438\u043F\u043E\u043C ").concat(ProviderType, "."),
                        error: error_1,
                    });
                    return [3 /*break*/, 10];
                case 10:
                    _i++;
                    return [3 /*break*/, 2];
                case 11: return [2 /*return*/, (cryptoProvidersCache = availableCryptoProviders)];
                case 12:
                    error_2 = _f.sent();
                    logData.push({ error: error_2 });
                    throw error_2;
                case 13:
                    logData.push({ availableCryptoProviders: availableCryptoProviders });
                    outputDebug('getCryptoProviders >>', logData);
                    return [7 /*endfinally*/];
                case 14: return [2 /*return*/];
            }
        });
    }); })();
}
