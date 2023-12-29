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
import { CRYPTO_PRO_CRYPTO_PROVIDER_TYPES, VIP_NET_CRYPTO_PROVIDER_TYPES, } from '../../constants';
import { getCryptoProviders } from '../getCryptoProviders';
import { pluginConfig } from '../../PluginConfig';
import { CryptoError } from '../../errors';
import { getSystemInfo } from '../getSystemInfo';
var oldestSupportedCryptoProCSPVersion = 4;
var oldestSupportedVipnetCSPVersion = 4.4;
/**
 * В данный момент имеется версия не меньше указанной версия Крипто-Провайдера.
 * @throws {CryptoError} в случае ошибки.
 * @returns {boolean} true, если поддерживается.
 */
export var checkIsSupportedCSPVersion = function () { return __awaiter(void 0, void 0, void 0, function () {
    var systemInfo, cryptoProviders, haveValidCryptoProCSPVersion, haveValidVipNetCSPVersion, _loop_1, _i, cryptoProviders_1, cryptoProvider, cryptoProCSP, vipNetCSP, version;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getSystemInfo()];
            case 1:
                systemInfo = _a.sent();
                return [4 /*yield*/, getCryptoProviders()];
            case 2:
                cryptoProviders = _a.sent();
                haveValidCryptoProCSPVersion = false;
                haveValidVipNetCSPVersion = false;
                if (pluginConfig.checkCspVersionFunc) {
                    _loop_1 = function (cryptoProvider) {
                        if (pluginConfig.CheckCryptoProviders.find(function (cp) {
                            return cp.ProviderType === cryptoProvider.ProviderType &&
                                cp.ProviderName === cryptoProvider.ProviderName;
                        })) {
                            var errorMessage = pluginConfig.checkCspVersionFunc(cryptoProvider);
                            if (errorMessage) {
                                throw CryptoError.create('CBP-4', 'Не поддерживаемая версия CSP', null, errorMessage);
                            }
                        }
                    };
                    for (_i = 0, cryptoProviders_1 = cryptoProviders; _i < cryptoProviders_1.length; _i++) {
                        cryptoProvider = cryptoProviders_1[_i];
                        _loop_1(cryptoProvider);
                    }
                }
                else {
                    if (systemInfo.cryptoProInstalled) {
                        cryptoProCSP = cryptoProviders.find(function (cp) {
                            return CRYPTO_PRO_CRYPTO_PROVIDER_TYPES.includes(cp.ProviderType);
                        });
                        if ((cryptoProCSP === null || cryptoProCSP === void 0 ? void 0 : cryptoProCSP.MajorVersion) &&
                            (cryptoProCSP === null || cryptoProCSP === void 0 ? void 0 : cryptoProCSP.MajorVersion) >= oldestSupportedCryptoProCSPVersion) {
                            haveValidCryptoProCSPVersion = true;
                        }
                    }
                    if (systemInfo.vipNetInstalled) {
                        vipNetCSP = cryptoProviders.find(function (cp) {
                            return VIP_NET_CRYPTO_PROVIDER_TYPES.includes(cp.ProviderType);
                        });
                        if (vipNetCSP === null || vipNetCSP === void 0 ? void 0 : vipNetCSP.MajorVersion) {
                            version = parseFloat((vipNetCSP === null || vipNetCSP === void 0 ? void 0 : vipNetCSP.MajorVersion) + '.' + (vipNetCSP === null || vipNetCSP === void 0 ? void 0 : vipNetCSP.MinorVersion));
                            haveValidVipNetCSPVersion = version >= oldestSupportedVipnetCSPVersion;
                        }
                    }
                    if (!(haveValidVipNetCSPVersion || haveValidCryptoProCSPVersion)) {
                        throw CryptoError.create('CBP-4', 'Не поддерживаемая версия CSP', null);
                    }
                }
                return [2 /*return*/];
        }
    });
}); };
