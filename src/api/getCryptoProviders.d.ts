import type { ICryptoProvider } from '../types';
/**
 * Получить список криптопровайдеров.
 * @throws {CryptoError} в случае ошибки.
 * @returns {Promise<ICryptoProvider[]>} Bнформация о типе, наименовании и версии криптопровайдеров.
 */
export declare function getCryptoProviders(resetCache?: boolean): Promise<ICryptoProvider[]>;
