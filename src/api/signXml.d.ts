import { CADESCOM_XML_SIGNATURE_TYPE } from '../constants';
import type { ICertificate } from '../types';
import { Certificate } from '../Certificate';
/**
 * Получить алгоритм вычисления подписи для Xml.
 * @param {Certificate} certificate сертификат.
 * @throws {CryptoError} в случае ошибки.
 * @returns {string} алгоритм вычисления подписи.
 */
export declare const getXmlSignAlgorithmType: (certificate: Certificate) => string;
/**
 * Получить алгоритм вычисления хэша.
 * @param {Certificate} certificate сертификат.
 * @throws {CryptoError} в случае ошибки.
 * @returns {string} алгоритм вычисления хэша.
 */
export declare const getXmlHashAlgorithmType: (certificate: Certificate) => string;
/**
 * Подписать входные данные указанным сертификатом в формате XmlDSig.
 * @param {ICertificate | Certificate} certificate -сертификат пользователя.
 * @param {ArrayBuffer | string} data - данные для подписания. Массив байт либо массив байт в формате Base64 строки.
 * @param {CADESCOM_XML_SIGNATURE_TYPE} xmlSignatureType - тип xml подписи.
 * @param {boolean} [doNotValidate=false] - не проводить валидацию сертификата.
 * @throws {CryptoError} в случае ошибки.
 * @returns файл подписи в кодировке Base64.
 */
export declare const signXml: (certificate: ICertificate | Certificate, data: ArrayBuffer | string, xmlSignatureType?: CADESCOM_XML_SIGNATURE_TYPE, doNotValidate?: boolean) => Promise<string>;
