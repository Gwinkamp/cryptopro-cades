import type { ICryptoProvider } from '../types';
/**
 * Справочник типок криптопровайдеров, с которыми работает плагин (для проверки поддержки).
 */
export declare const CRYPTO_PROVIDERS: ICryptoProvider[];
/**
 * Криптопровайдер по-умолчанию.
 */
export declare const DEFAULT_CRYPTO_PROVIDER: {
    Default: ICryptoProvider;
    Fallback: ICryptoProvider;
};
/**
 * Криптопровайдеры VipNet.
 */
export declare const VIP_NET_CRYPTO_PROVIDER_TYPES: readonly number[];
/**
 * Криптопровайдеры КриптоПРО.
 */
export declare const CRYPTO_PRO_CRYPTO_PROVIDER_TYPES: readonly number[];
