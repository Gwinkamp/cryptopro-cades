import type { WithOptionalPromise } from '../WithOptionalPromise';
import {
  type ENCODING_TYPE,
  type INSTALL_RESPONSE_RESTRICTION_FLAGS,
  type X509_CERT_ENROLL_CTX,
} from '../../constants';

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

  /**
   * Инициализирует объект перед установкой полученного сертификата.
   * @param context перечисление, указывающее на характер конечной сущности, для которой предназначен сертификат
   */
  Initialize(context: X509_CERT_ENROLL_CTX): WithOptionalPromise<void>;

  /**
   * Устанавливает полученный сертификат в хранилище
   * @param restrictionFlags перечисление, указывающее тип сертификатов, которые можно установить
   * @param certificateBody тело сертификата, которое необходимо установить
   * @param encoding тип кодировки тела сертификата
   * @param password необязательный пароль для установки сертификата.
   * Это может быть значение NULL или пустая строка, указывающая на то, что пароль не используется.
   */
  InstallResponse(
    restrictionFlags: INSTALL_RESPONSE_RESTRICTION_FLAGS,
    certificateBody: string,
    encoding: ENCODING_TYPE,
    password: string | null,
  ): WithOptionalPromise<void>;
}
