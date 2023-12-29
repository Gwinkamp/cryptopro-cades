import { Certificate } from '../Certificate';
import type { ICertificate } from '../types';
/**
 * Валидация сертификата.
 *
 *  @example
 *  validateCertificate(cert, async (cert) => await (await cert.IsValid()).Result)
 *
 * @param {ICertificate|Certificate} certificate - собственно сертификат.
 * @param {Function} customValidationFunc - иные условия валидации сертификата.
 * @throws {CryptoError} в случае ошибки.
 * @returns {Promise<string|null>} .null, если сертификат валиден.
 */
export declare function validateCertificate(certificate: Certificate | ICertificate, customValidationFunc?: (cert: Certificate | ICertificate) => Promise<string | null>): Promise<string | null>;
