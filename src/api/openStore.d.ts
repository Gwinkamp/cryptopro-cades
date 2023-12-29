import type { IStore } from '../types';
import { CAPICOM_STORE_OPEN_MODE, STORE_LOCATION } from '../constants';
/**
 * Открывает хранилище с сертификатами.
 * @returns {IStore} store хранилище с сертификатами.
 * @param {STORE_LOCATION} storeLocation - расположение хранилища.
 * @param {string} storeName - (!)будет проигнорирован если storeLocation = CAPICOM_SMART_CARD_USER_STORE.
 * @param {CAPICOM_STORE_OPEN_MODE} openMode - режим открытия хранилища.
 * @throws {CryptoError} в случае ошибки.
 * @returns {Promise<IStore>} .
 */
export declare function openStore(storeLocation?: STORE_LOCATION, storeName?: string, openMode?: CAPICOM_STORE_OPEN_MODE): Promise<IStore>;
