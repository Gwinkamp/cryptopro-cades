import type { ICertificate } from '../types';
import { Certificate } from '../Certificate';
/**
 * Подписать хэш указанным сертификатом в формате CMS.
 * @param {ICertificate | Certificate} certificate -сертификат пользователя.
 * @param {ArrayBuffer | string} data - данные для подписания. Массив байт хэша либо сам хэш в формате hex строки (в любом регистре)
 * @example
 *  4A5F6E54CA44064A5544943DDC244DDC84DC3952AC5924A475838E7BB8320878
 * @param {boolean} [includeCertChain=true] - включать в результат всю цепочку сертификатов.
 * @param {boolean} [doNotValidate=false] - не проводить валидацию сертификатов.
 * @throws {CryptoError} в случае ошибки.
 * @returns файл подписи в кодировке Base64.
 */
export declare function signHash(certificate: ICertificate | Certificate, data: ArrayBuffer | string, includeCertChain?: boolean, doNotValidate?: boolean): Promise<string>;
