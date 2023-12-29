/**
 * Создание криптографического объекта.
 * @see https://docs.cryptopro.ru/cades/plugin/plugin-activation
 * @param {string} objectIdentifier. наименование создаваемого объекта. Объекты указываются в @see CRYPTO_OBJECTS.
 * @throws {CryptoError} в случае ошибки.
 * @returns {Promise<object|null|undefined>} Созданный объект.
 */
export declare function createObject(objectIdentifier: string): Promise<any | never>;
