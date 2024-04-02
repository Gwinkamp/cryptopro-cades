import { type CertificateSubject } from '../CertificateSubject';
import {
  AT_KEYEXCHANGE,
  CAPICOM_KEY_USAGE,
  CRYPTO_OBJECTS,
  ENCODING_TYPE,
  X509_CERT_ENROLL_CTX,
  X509_PRIVATE_KEY_EXPORT_FLAGS,
  attributeOids,
} from '../constants';
import { CryptoError } from '../errors';
import { type ICryptoProvider } from '../types';
import { type CreateContainerOptions } from '../types/CreateContainerOptions';
import { type CX509PrivateKey } from '../types/cadesplugin/CX509PrivateKey';
import { type ICX500DistinguishedName } from '../types/cadesplugin/ICX500DistinguishedName';
import { type ICX509CertificateRequestPkcs10 } from '../types/cadesplugin/ICX509CertificateRequestPkcs10';
import { type ICX509Enrollment } from '../types/cadesplugin/ICX509Enrollment';
import { type ICX509ExtensionKeyUsage } from '../types/cadesplugin/ICX509ExtensionKeyUsage';
import { outputDebug } from '../utils';

import { createObject } from './createObject';
import { afterPluginLoaded } from './internal/afterPluginLoaded';
import { setCryptoProperty } from './internal/setCryptoProperty';
import { unwrap } from './internal/unwrap';

/**
 * Построить строку с данными владельца сертификата
 * @param subject данные владельца сертификата
 */
function buildSubjectString(subject: CertificateSubject): string {
  let properties = new Array<string>();

  for (const [key, value] of Object.entries(subject)) {
    const oid = attributeOids[key];

    if (value == null) {
      continue;
    }

    if (oid === undefined) {
      const errorMessage = `Неизвестный атрибут сертификата "${key}".`;

      throw CryptoError.create('CBP-7', errorMessage, null, errorMessage);
    }

    properties.push(`${oid}=${JSON.stringify(value)}`);
  }

  return properties.join(',');
}

/**
 * Нормализовать строку запроса на выпуск сертификата.
 * @param certRequest строка с запросом на выпуск сертификата в формате base64.
 * @returns нормализованная строка с запросом на выпуск сертификата в формат в формате base64.
 */
function normalizeCertRequest(certRequest: string): string {
  let result = certRequest;

  result = result.replace('-----BEGIN CERTIFICATE-----', '');
  result = result.replace('-----END CERTIFICATE-----', '');
  result = result.replace(/(\r\n|\n|\r)/gm, '');

  return (
    '-----BEGIN NEW CERTIFICATE REQUEST-----' +
    result +
    '-----END NEW CERTIFICATE REQUEST-----'
  );
}

/**
 * Создать запрос на выпуск сертификата
 * @param provider криптопровайдер
 * @param subject данные владельца сертификата
 * @param containerOpts параметры контейнера закрытого ключа
 */
export function createCertRequest(
  provider: ICryptoProvider,
  subject: CertificateSubject,
  containerOpts: CreateContainerOptions,
): Promise<string> {
  return afterPluginLoaded(async () => {
    const logData = [];

    logData.push({
      provider,
      subject,
      containerOpts,
    });

    let data: string;

    try {
      let privateKey: CX509PrivateKey;

      try {
        privateKey = await createObject(CRYPTO_OBJECTS.privateKey);
      } catch (error) {
        throw CryptoError.createCadesError(
          error,
          `Ошибка при создании объекта ${CRYPTO_OBJECTS.privateKey}.`,
        );
      }

      await setCryptoProperty(
        privateKey,
        'ProviderName',
        provider.ProviderName,
      );

      await setCryptoProperty(
        privateKey,
        'ProviderType',
        provider.ProviderType,
      );

      await setCryptoProperty(privateKey, 'KeySpec', AT_KEYEXCHANGE);

      if (containerOpts.containerName) {
        await setCryptoProperty(
          privateKey,
          'ContainerName',
          containerOpts.containerName,
        );
      }

      if (containerOpts.pin) {
        await setCryptoProperty(privateKey, 'Pin', containerOpts.pin);
      }

      if (containerOpts.allowExport) {
        await setCryptoProperty(
          privateKey,
          'ExportPolicy',
          X509_PRIVATE_KEY_EXPORT_FLAGS.XCN_NCRYPT_ALLOW_EXPORT_FLAG,
        );
      }

      logData.push({ privateKey });

      let certRequest: ICX509CertificateRequestPkcs10;

      try {
        certRequest = await createObject(CRYPTO_OBJECTS.certificateRequest);
      } catch (error) {
        throw CryptoError.createCadesError(
          error,
          `Ошибка при создании объекта ${CRYPTO_OBJECTS.certificateRequest}.`,
        );
      }

      try {
        certRequest.InitializeFromPrivateKey(
          X509_CERT_ENROLL_CTX.USER,
          privateKey,
          '',
        );
      } catch (error) {
        throw CryptoError.createCadesError(
          error,
          'Ошибка инициализации запроса на создание сертификата.',
        );
      }

      let distinguishedName: ICX500DistinguishedName;

      try {
        distinguishedName = await createObject(
          CRYPTO_OBJECTS.distinguishedName,
        );
      } catch (error) {
        throw CryptoError.createCadesError(
          error,
          `Ошибка при создании объекта ${CRYPTO_OBJECTS.distinguishedName}.`,
        );
      }

      const subjectString = buildSubjectString(subject);

      try {
        await distinguishedName.Encode(subjectString);
      } catch (error) {
        throw CryptoError.createCadesError(
          error,
          'Ошибка кодирования Subject атрибутов сертификата',
        );
      }

      await setCryptoProperty(certRequest, 'Subject', distinguishedName);

      let keyUsageExtension: ICX509ExtensionKeyUsage;

      try {
        keyUsageExtension = await createObject(
          CRYPTO_OBJECTS.keyUsageExtension,
        );
      } catch (error) {
        throw CryptoError.createCadesError(
          error,
          `Ошибка при создании объекта ${CRYPTO_OBJECTS.keyUsageExtension}.`,
        );
      }

      await keyUsageExtension.InitializeEncode(
        CAPICOM_KEY_USAGE.CAPICOM_DATA_ENCIPHERMENT_KEY_USAGE |
          CAPICOM_KEY_USAGE.CAPICOM_DIGITAL_SIGNATURE_KEY_USAGE |
          CAPICOM_KEY_USAGE.CAPICOM_NON_REPUDIATION_KEY_USAGE |
          CAPICOM_KEY_USAGE.CAPICOM_KEY_ENCIPHERMENT_KEY_USAGE,
      );

      const extensions = await unwrap(certRequest.X509Extensions);

      await extensions.Add(keyUsageExtension);

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
        await enroll.InitializeFromRequest(certRequest);

        data = await enroll.CreateRequest(
          ENCODING_TYPE.XCN_CRYPT_STRING_BASE64HEADER,
        );
      } catch (error) {
        throw CryptoError.createCadesError(
          error,
          'Ошибка при создании запроса на выпуск сертификата.',
        );
      }

      logData.push({ data });
    } catch (error) {
      logData.push({ error });
      throw error;
    } finally {
      outputDebug('createCertRequest >>', logData);
    }

    return normalizeCertRequest(data);
  })();
}
