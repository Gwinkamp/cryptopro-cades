import {
  CRYPTO_OBJECTS,
  ENCODING_TYPE,
  INSTALL_RESPONSE_RESTRICTION_FLAGS,
  X509_CERT_ENROLL_CTX,
} from '../constants';
import type { ICX509Enrollment } from '../types/cadesplugin/ICX509Enrollment';
import { CryptoError } from '../errors';
import { outputDebug } from '../utils';

import { afterPluginLoaded } from './internal/afterPluginLoaded';
import { createObject } from './createObject';

/**
 * Установить сертификат в хранилище
 * @param certBody тело устанавливаемого сертификата
 * @param encoding кодировка сертификата (по-умолчанию base64)
 * @param restrictionFlags тип сертификатов, которые можно установить (по-умолчанию не устанавливать недоверенные сертификаты)
 * @param password пароль, использующийся при установке сертификата (по-умолчанию не используется)
 */
export function installCertificate(
  certBody: string,
  encoding: ENCODING_TYPE = ENCODING_TYPE.XCN_CRYPT_STRING_BASE64_ANY,
  restrictionFlags: INSTALL_RESPONSE_RESTRICTION_FLAGS = INSTALL_RESPONSE_RESTRICTION_FLAGS.AllowNone,
  password: string = '',
): Promise<void> {
  return afterPluginLoaded(async () => {
    const logData = [];

    logData.push({
      certBody,
      encoding,
      restrictionFlags,
      password,
    });

    try {
      let enroll: ICX509Enrollment;

      try {
        enroll = await createObject(CRYPTO_OBJECTS.enrollment);
      } catch (error) {
        throw CryptoError.createCadesError(
          error,
          `Ошибка при создании объекта ${CRYPTO_OBJECTS.enrollment}.`,
        );
      }

      try {
        await enroll.Initialize(X509_CERT_ENROLL_CTX.USER);
      } catch (error) {
        throw CryptoError.createCadesError(
          error,
          `Ошибка инициализации объекта ${CRYPTO_OBJECTS.enrollment}.`,
        );
      }

      try {
        await enroll.InstallResponse(
          restrictionFlags,
          certBody,
          encoding,
          password,
        );
      } catch (error) {
        throw CryptoError.createCadesError(
          error,
          'Ошибка установки сертификата.',
        );
      }
    } catch (error) {
      logData.push({ error });
      throw error;
    } finally {
      outputDebug('installCertificate >>', logData);
    }
  })();
}
