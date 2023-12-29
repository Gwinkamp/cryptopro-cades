import { Certificate } from '../Certificate';
/**
 * Поиск в хранилищах сертификата.
 * @param {string} thumbprint -отпечаток искомого сертификата.
 * @throws {CryptoError} в случае ошибки.
 * @returns {Promise<Certificate | undefined>} сертификат.
 */
export declare function findCertificateByThumbprint(thumbprint: string): Promise<Certificate | undefined>;
