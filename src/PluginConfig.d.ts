import { CryptoError } from './errors';
import type { ICryptoProvider } from './types';
/**
 * Настройки плагина.
 */
declare class PluginConfig {
    /**
     * Список подписчиков возникающих ошибок в системе.
     */
    private errorListeners;
    /**
     * Функция для проверки (переопределения проверки) версии криптопровайдера.
     * Если вернуть null, считаем что версия прошла проверку.
     */
    checkCspVersionFunc: ((cryptoProvider: ICryptoProvider) => string | null) | null;
    /**
     * Выводить дебаг-информацию.
     */
    Debug: boolean;
    /**
     * Выводить дебаг информацию по криптопро плагину.
     */
    DebugCryptoProBrowserPlugin: boolean;
    /**
     * Проверять систему при инициализации.
     */
    CheckSystemSetup: boolean;
    /**
     * Список криптопровайдеров для проверки и работы.
     */
    CheckCryptoProviders: ICryptoProvider[];
    /**
     * Зарегистрировать подписчика ошибок.
     * @param cb Функция обратного вызова.
     * @remarks Подписчики ошибок будут вызваны в обратном порядке.
     */
    addErrorListener(cb: (error: CryptoError) => void): void;
    /**
     * Уведомить подписчиков об ошибке.
     * @param error Ошибка.
     */
    notifyError(error: CryptoError): void;
}
declare const pluginConfig: PluginConfig;
export { pluginConfig };
export default pluginConfig;
