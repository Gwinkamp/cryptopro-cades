/**
 * Проверяет корректность настроек ЭП на машине.
 * @throws {CryptoError} в случае обнаружения ошибок, если не установлен криптопровайдер или версия не поддерживается.
 */
export declare const checkIsValidSystemSetup: () => Promise<void>;
