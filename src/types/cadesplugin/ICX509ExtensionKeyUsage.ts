import type { WithOptionalPromise } from '../WithOptionalPromise';
import { type CAPICOM_KEY_USAGE } from '../../constants';

/**
 * Объект, описывающий расширение KeyUsage в запросе на сертификат.
 * @see https://docs.cryptopro.ru/cades/plugin/certenroll/cx509extensionkeyusage
 */
export interface ICX509ExtensionKeyUsage {
  /**
   * Инициализирует расширение.
   * @param flags флаги расширения.
   */
  InitializeEncode(flags: CAPICOM_KEY_USAGE): WithOptionalPromise<void>;
}
