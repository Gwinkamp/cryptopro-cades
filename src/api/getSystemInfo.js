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
import { CryptoError } from '../errors';
import { CRYPTO_OBJECTS, CRYPTO_PRO_CRYPTO_PROVIDER_TYPES, DEFAULT_CRYPTO_PROVIDER, VIP_NET_CRYPTO_PROVIDER_TYPES, } from '../constants';
import { outputDebug } from '../utils';
import { afterPluginLoaded } from './internal/afterPluginLoaded';
import { createObject } from './createObject';
import { getCryptoProviders } from './getCryptoProviders';
import { unwrap } from './internal/unwrap';
/**
 * Кэш информации о системе.
 */
var systemInfoCache = null;
/**
 * Предоставляет информацию о системе.
 *
 * @returns информацию о CSP и плагине.
 */
export var getSystemInfo = function () {
    if (systemInfoCache) {
        return Promise.resolve(systemInfoCache);
    }
    return afterPluginLoaded(function () { return __awaiter(void 0, void 0, void 0, function () {
        var sysInfo, logData, cadesAbout, _i, _a, cryptoProvider, pluginVersion, _b, _c, error_1, error_2;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (systemInfoCache) {
                        return [2 /*return*/, Promise.resolve(systemInfoCache)];
                    }
                    sysInfo = {
                        cadesVersion: '',
                        cspVersion: null,
                        cryptoProInstalled: false,
                        vipNetInstalled: false,
                        cryptoProviderName: null,
                    };
                    logData = [];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 14, 15, 16]);
                    return [4 /*yield*/, createObject(CRYPTO_OBJECTS.about)];
                case 2:
                    cadesAbout = _d.sent();
                    _i = 0;
                    return [4 /*yield*/, getCryptoProviders()];
                case 3:
                    _a = _d.sent();
                    _d.label = 4;
                case 4:
                    if (!(_i < _a.length)) return [3 /*break*/, 6];
                    cryptoProvider = _a[_i];
                    if (VIP_NET_CRYPTO_PROVIDER_TYPES.includes(cryptoProvider.ProviderType)) {
                        sysInfo.vipNetInstalled = true;
                        sysInfo.cryptoProviderName =
                            DEFAULT_CRYPTO_PROVIDER.Fallback.ProviderName;
                        sysInfo.cspVersion =
                            cryptoProvider.MajorVersion + '.' + cryptoProvider.MinorVersion;
                    }
                    if (CRYPTO_PRO_CRYPTO_PROVIDER_TYPES.includes(cryptoProvider.ProviderType)) {
                        sysInfo.cryptoProInstalled = true;
                        sysInfo.cryptoProviderName =
                            DEFAULT_CRYPTO_PROVIDER.Default.ProviderName;
                        sysInfo.cspVersion =
                            cryptoProvider.MajorVersion +
                                '.' +
                                cryptoProvider.MinorVersion +
                                '.' +
                                cryptoProvider.BuildVersion;
                    }
                    _d.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 4];
                case 6:
                    _d.trys.push([6, 12, , 13]);
                    return [4 /*yield*/, unwrap(cadesAbout.PluginVersion)];
                case 7:
                    pluginVersion = _d.sent();
                    if (!pluginVersion) return [3 /*break*/, 9];
                    _b = sysInfo;
                    return [4 /*yield*/, unwrap(pluginVersion.toString())];
                case 8:
                    _b.cadesVersion = _d.sent();
                    _d.label = 9;
                case 9:
                    if (!!sysInfo.cadesVersion) return [3 /*break*/, 11];
                    _c = sysInfo;
                    return [4 /*yield*/, unwrap(cadesAbout.Version)];
                case 10:
                    _c.cadesVersion = _d.sent();
                    _d.label = 11;
                case 11: return [3 /*break*/, 13];
                case 12:
                    error_1 = _d.sent();
                    throw CryptoError.createCadesError(error_1, 'Ошибка при получении информации о системе');
                case 13: return [2 /*return*/, (systemInfoCache = sysInfo)];
                case 14:
                    error_2 = _d.sent();
                    logData.push({ error: error_2 });
                    throw error_2;
                case 15:
                    logData.push({ sysInfo: sysInfo });
                    outputDebug('getSystemInfo >>', logData);
                    return [7 /*endfinally*/];
                case 16: return [2 /*return*/];
            }
        });
    }); })();
};
