import type { ICertificate } from '../types';
import { Certificate } from '../Certificate';
/**
 * Подписать входные данные указанным сертификатом в формате CMS.
 * @param {ICertificate | Certificate} certificate -сертификат пользователя.
 * @param {ArrayBuffer | string} data - данные для подписания. Массив байт либо массив байт в формате Base64 строки.
 * @param {boolean} [detach=true] присоединять подпись к данным или отдельно?
 * @param {boolean} [includeCertChain=true] - включать в результат всю цепочку сертификатов.
 * @param {boolean} [doNotValidate=false] - не проводить валидацию сертификатов.
 * @throws {CryptoError} в случае ошибки.
 * @returns файл подписи в кодировке Base64.
 */
export declare function sign(certificate: ICertificate | Certificate, data: ArrayBuffer | string, detach?: boolean, includeCertChain?: boolean, doNotValidate?: boolean): Promise<string>;
