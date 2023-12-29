import { CryptoError } from './errors';
import { outputError } from './utils';
import { CRYPTO_PROVIDERS } from './constants';
/**
 * Настройки плагина.
 */
var PluginConfig = /** @class */ (function () {
    function PluginConfig() {
        /**
         * Список подписчиков возникающих ошибок в системе.
         */
        this.errorListeners = [];
        /**
         * Функция для проверки (переопределения проверки) версии криптопровайдера.
         * Если вернуть null, считаем что версия прошла проверку.
         */
        this.checkCspVersionFunc = null;
        /**
         * Выводить дебаг-информацию.
         */
        this.Debug = false;
        /**
         * Выводить дебаг информацию по криптопро плагину.
         */
        this.DebugCryptoProBrowserPlugin = false;
        /**
         * Проверять систему при инициализации.
         */
        this.CheckSystemSetup = true;
        /**
         * Список криптопровайдеров для проверки и работы.
         */
        this.CheckCryptoProviders = CRYPTO_PROVIDERS;
    }
    /**
     * Зарегистрировать подписчика ошибок.
     * @param cb Функция обратного вызова.
     * @remarks Подписчики ошибок будут вызваны в обратном порядке.
     */
    PluginConfig.prototype.addErrorListener = function (cb) {
        this.errorListeners.unshift(cb);
    };
    /**
     * Уведомить подписчиков об ошибке.
     * @param error Ошибка.
     */
    PluginConfig.prototype.notifyError = function (error) {
        this.errorListeners.forEach(function (cb) { return cb(error); });
    };
    return PluginConfig;
}());
var pluginConfig = new PluginConfig();
/**
 * Функция логирования всех возникающих ошибок.
 * @param error Ошибка.
 */
var logErrorWhenInDebug = function (error) {
    if (pluginConfig.Debug && error) {
        var errors = [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var err = error;
        while (err != null) {
            errors.push(err);
            if (err instanceof CryptoError || err instanceof Error) {
                err = err.cause;
            }
            else {
                err = null;
            }
        }
        if (errors === null || errors === void 0 ? void 0 : errors.length) {
            outputError('Ошибка >>', errors);
        }
    }
};
pluginConfig.addErrorListener(logErrorWhenInDebug);
export { pluginConfig };
export default pluginConfig;
