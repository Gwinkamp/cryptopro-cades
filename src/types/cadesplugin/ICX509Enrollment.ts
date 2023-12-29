import type { WithOptionalPromise } from '../WithOptionalPromise';

import { type ICX509CertificateRequestPkcs10 } from './ICX509CertificateRequestPkcs10';

/**
 * Объект, предназначенный для создания запросов на сертификат и установки полученных сертификатов.
 * @see https://docs.cryptopro.ru/cades/plugin/certenroll/cx509enrollment
 */
export interface ICX509Enrollment {
  /**
   * Инициализирует объект с использованием запроса CX509CertificateRequestPkcs10.
   * @param request объект запроса на сертификат.
   */
  InitializeFromRequest(
    request: ICX509CertificateRequestPkcs10,
  ): WithOptionalPromise<void>;

  /**
   * Создает и подписывает запрос на выпуск сертификата.
   * @param encoding тип кодировки запроса на выпуск сертификата.
   * @returns тело запроса на выпуск сертификата.
   */
  CreateRequest(encoding: number): WithOptionalPromise<string>;
}
