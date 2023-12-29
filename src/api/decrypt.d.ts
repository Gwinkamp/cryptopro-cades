/**
 * Расшифровать данные.
 * @param {string} encryptedData - данные для расшифрования. Массив байт либо массив байт в формате Base64 строки.
 * @throws {CryptoError} в случае ошибки.
 * @returns {Promise<string>} .Расшифрованная строка в кодировке Base64.
 */
export declare function decrypt(encryptedData: ArrayBuffer | string): Promise<string>;
