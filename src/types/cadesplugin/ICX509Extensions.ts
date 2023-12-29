import type { WithOptionalPromise } from '../WithOptionalPromise';

import { type ICX509ExtensionKeyUsage } from './ICX509ExtensionKeyUsage';

/**
 * Объект, описывающий коллекцию расширений в запросе на сертификат.
 */
export interface ICX509Extensions {
  /**
   * Добавляет объект расширение в коллекцию
   * @param extension расширение ICX509ExtensionKeyUsage
   */
  Add(extension: ICX509ExtensionKeyUsage): WithOptionalPromise<void>;
}
