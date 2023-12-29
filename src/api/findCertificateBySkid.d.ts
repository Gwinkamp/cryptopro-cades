import type { Certificate } from '../Certificate';
/**
 * Поиск в хранилищах сертификата.
 * @param {string} subjectKeyId -идентификатор ключа субъекта.
 * @throws {CryptoError} в случае ошибки.
 * @returns {@Promise<Certificate | undefined>} сертификат.
 */
export declare function findCertificateBySkid(subjectKeyId: string): Promise<Certificate | undefined>;
