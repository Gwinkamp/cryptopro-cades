# @gwinkamp/cryptopro-cades

fork проекта `@astral/cryptopro-cades`  
https://github.com/kaluga-astral/services

Библиотека для взаимодействия с [КриптоПро ЭЦП Browser plug-in](https://www.cryptopro.ru/products/cades/plugin)

## Установка

```bash
npm install @gwinkamp/cryptopro-cades
```

## API surface

- `sign` - подпись контента файла (CMS, прикрепленный или открепленный).
- `signHash` - подпись хэша файла (CMS detached). Хэш должен быть вычислен по Gost3411_2012 ГОСТу (256 или 512 в зависимости от алгоритма сертификата).
- `signXml` - подпись файла (XmlDSig). Параметром управляется тип Enveloped, Enveloping, Template.
- `decrypt` - расшифровка файла (CMS).
- `encrypt` - шифрование файла (CMS).
- `findCertificateBySkid` - поиск по значению из расширения сертификата SubjectKeyId (oid '2.5.29.14').
- `findCertificateByThumprint` - поиск сертификата по отпечатку (хэш sha-1).
- `createCertRequest` - генерация контейнера закрытого ключа и создание запроса на выпуск сертификата.
- `installCertificate` - установка сертификата в хранилище.
- `getCertificates` - получение списка сертификатов, с возможностью указать тип хранилища для поиска (токены, реестры или всё и сразу).
  - сертификаты имеют в составе базовую информацию:
    - certificateBase64Data
    - issuer
      - inn
      - innLe
      - commonName
    - subject
      - commonName
      - surname
      - name
      - country
      - region
      - locality
      - street
      - organization
      - department
      - post
      - ogrnip
      - ogrn
      - snils
      - innLe
      - inn
      - email
    - subjectName
    - thumbprint
    - subjectKeyId
    - name
    - providerName, providerType
    - hasPrivateKey
    - isGost
    - notBefore, notAfter
    - algorithm

- `checkPlugin` - проверка доступности КриптоПРО Браузер плагина.
- `checkIsValidSystemSetup` - проверка корректности рабочего места - наличие криптопровайдера, плагина, и минимальных версий.
- `getCryptoProviders` - получение списка криптопровайдеров установленных на компьютере пользователя. Название, тип, версия.
- `getSystemInfo` - получение информации о системе пользователя - версия КриптоПро ЭЦП Browser plug-in, версия CSP (VipNet или CryptoPro)
- `pluginConfig` - возможность включить вывод отладочной информации, подписываться на все создаваемые исключения, отключать проверку корректности системы, ограничивать тип криптопровайдера которым можно пользоваться, его версии.
