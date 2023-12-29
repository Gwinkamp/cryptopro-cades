import type { ICertificate } from '../types';
/**
 * Зашировать данные на указанные сертификаты.
 * @param {string} data - данные для шифрования. Массив байт либо массив байт в формате Base64 строки.
 * @param {ICertificate[]} recipientCertificates -список сертификатов получателей шифрованного сообщения.
 * @throws {CryptoError} в случае ошибки.
 * @returns {Promise<string>} .Зашифрованная строка в кодировке Base64.
 */
export declare function encrypt(data: ArrayBuffer | string, recipientCertificates: ICertificate[]): Promise<string>;
