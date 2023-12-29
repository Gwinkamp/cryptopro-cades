import { STORE_TYPE } from '../constants';
import { Certificate } from '../Certificate';
/**
 * Возвращает список валидных доступных для работы сертификатов.
 *
 * @param {STORE_TYPE} storeType из какого хранилища требуется получить сертификаты (из токена, реестра, все...).
 * @param {resetCache} resetCache перезапросить данные, игнорируя закэшированные данные.
 * @throws {CryptoError} в случае ошибки.
 * @returns {Promise<Certificate[]>} .сертификаты.
 */
export declare function getCertificates(storeType?: STORE_TYPE, resetCache?: boolean): Promise<Certificate[]>;
