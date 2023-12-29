import type { WithOptionalPromise } from '../WithOptionalPromise';
import { type X509_CERT_ENROLL_CTX } from '../../constants';

import type { CX509PrivateKey } from './CX509PrivateKey';
import { type ICX509Extensions } from './ICX509Extensions';

/**
 * Объект запроса на выпуск сертификата.
 * @see https://docs.cryptopro.ru/cades/plugin/certenroll/cx509certificaterequestpkcs10
 */
export interface ICX509CertificateRequestPkcs10 {
  /**
   * Инициализирует объект с использованием закрытого ключа CX509PrivateKey.
   * @param context Значение перечисления X509CertificateEnrollmentContext,
   * указывающее, предназначен ли запрошенный сертификат для конечного пользователя, компьютера или администратора,
   * действующего от имени компьютера.
   * @param privateKey Объект закрытого ключа.
   * @param strTemplateName Этот параметр в CBP не используется и следует передавать пустую строку.
   */
  InitializeFromPrivateKey(
    context: X509_CERT_ENROLL_CTX,
    privateKey: CX509PrivateKey,
    strTemplateName: string,
  ): WithOptionalPromise<void>;

  /**
   * Коллекция расширений CX509Extensions.
   */
  X509Extensions: WithOptionalPromise<ICX509Extensions>;
}
