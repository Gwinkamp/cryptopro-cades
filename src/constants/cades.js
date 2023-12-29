/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Хранилище персональных сертификатов пользователя.
 */
export var CAPICOM_MY_STORE = 'My';
/**
 * Тип подписи XML-документа.
 * @see https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_enum/cadescom_xml_signature_type
 */
export var CADESCOM_XML_SIGNATURE_TYPE;
(function (CADESCOM_XML_SIGNATURE_TYPE) {
    /**
     * Вложенная подпись.
     */
    CADESCOM_XML_SIGNATURE_TYPE[CADESCOM_XML_SIGNATURE_TYPE["CADESCOM_XML_SIGNATURE_TYPE_ENVELOPED"] = 0] = "CADESCOM_XML_SIGNATURE_TYPE_ENVELOPED";
    /**
     * Оборачивающая подпись.
     */
    CADESCOM_XML_SIGNATURE_TYPE[CADESCOM_XML_SIGNATURE_TYPE["CADESCOM_XML_SIGNATURE_TYPE_ENVELOPING"] = 1] = "CADESCOM_XML_SIGNATURE_TYPE_ENVELOPING";
    /**
     * Подпись по шаблону.
     */
    CADESCOM_XML_SIGNATURE_TYPE[CADESCOM_XML_SIGNATURE_TYPE["CADESCOM_XML_SIGNATURE_TYPE_TEMPLATE"] = 2] = "CADESCOM_XML_SIGNATURE_TYPE_TEMPLATE";
})(CADESCOM_XML_SIGNATURE_TYPE || (CADESCOM_XML_SIGNATURE_TYPE = {}));
/**
 * Тип подписи XAdES-XML-документа.
 * @see https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_enum/cadescom_xades_type
 */
export var CADESCOM_XADES_TYPE;
(function (CADESCOM_XADES_TYPE) {
    /**
     * Тип подписи по умолчанию (XAdES-X Long Type 1).
     */
    CADESCOM_XADES_TYPE[CADESCOM_XADES_TYPE["CADESCOM_XADES_DEFAULT"] = 16] = "CADESCOM_XADES_DEFAULT";
    /**
     * Тип подписи XAdES-A.
     */
    CADESCOM_XADES_TYPE[CADESCOM_XADES_TYPE["CADESCOM_XADES_A"] = 2000] = "CADESCOM_XADES_A";
    /**
     * Тип подписи XAdES BES.
     */
    CADESCOM_XADES_TYPE[CADESCOM_XADES_TYPE["CADESCOM_XADES_BES"] = 32] = "CADESCOM_XADES_BES";
    /**
     * Тип подписи XAdES T.
     */
    CADESCOM_XADES_TYPE[CADESCOM_XADES_TYPE["CADESCOM_XADES_T"] = 80] = "CADESCOM_XADES_T";
    /**
     * Тип подписи XAdES-X Long Type 1.
     */
    CADESCOM_XADES_TYPE[CADESCOM_XADES_TYPE["CADESCOM_XADES_X_LONG_TYPE_1"] = 1488] = "CADESCOM_XADES_X_LONG_TYPE_1";
    /**
     * Тип подписи XMLDSIG.
     */
    CADESCOM_XADES_TYPE[CADESCOM_XADES_TYPE["CADESCOM_XMLDSIG_TYPE"] = 0] = "CADESCOM_XMLDSIG_TYPE";
})(CADESCOM_XADES_TYPE || (CADESCOM_XADES_TYPE = {}));
/**
 * Тип усовершенствованной подписи.
 * @see https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_enum/cadescom_cades_type
 */
export var CADESCOM_CADES_TYPE;
(function (CADESCOM_CADES_TYPE) {
    /**
     * Тип подписи по умолчанию (CAdES-X Long Type 1).
     */
    CADESCOM_CADES_TYPE[CADESCOM_CADES_TYPE["CADESCOM_CADES_DEFAULT"] = 0] = "CADESCOM_CADES_DEFAULT";
    /**
     * Тип подписи CAdES BES.
     */
    CADESCOM_CADES_TYPE[CADESCOM_CADES_TYPE["CADESCOM_CADES_BES"] = 1] = "CADESCOM_CADES_BES";
    /**
     * Тип подписи CAdES T.
     */
    CADESCOM_CADES_TYPE[CADESCOM_CADES_TYPE["CADESCOM_CADES_T"] = 5] = "CADESCOM_CADES_T";
    /**
     * Тип подписи CAdES-X Long Type 1.
     */
    CADESCOM_CADES_TYPE[CADESCOM_CADES_TYPE["CADESCOM_CADES_X_LONG_TYPE_1"] = 93] = "CADESCOM_CADES_X_LONG_TYPE_1";
    /**
     * Тип подписи PKCS7.
     */
    CADESCOM_CADES_TYPE[CADESCOM_CADES_TYPE["CADESCOM_PKCS7_TYPE"] = 65535] = "CADESCOM_PKCS7_TYPE";
})(CADESCOM_CADES_TYPE || (CADESCOM_CADES_TYPE = {}));
/**
 * Типы криптографических алгоритмов для XmlDsig
 * @see https://docs.cryptopro.ru/cades/plugin/plugin-methods?id=Константы
 * @see https://docs.cryptopro.ru/cades/plugin/plugin-samples/plugin-samples-sign-xml
 */
export var XML_SIGNATURE_GOST_ALGORITHM_TYPE;
(function (XML_SIGNATURE_GOST_ALGORITHM_TYPE) {
    /**
     * Алгоритм подписи для XmlDsig, ГОСТ 2001.
     */
    XML_SIGNATURE_GOST_ALGORITHM_TYPE["XmlDsigGost3410Url"] = "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr34102001-gostr3411";
    /**
     * URL Алгоритм подписи для XmlDsig, ГОСТ 2001.
     */
    XML_SIGNATURE_GOST_ALGORITHM_TYPE["XmlDsigGost3410UrlObsolete"] = "http://www.w3.org/2001/04/xmldsig-more#gostr34102001-gostr3411";
    /**
     * Алгоритм хеширования для XmlDsig, ГОСТ 2001.
     */
    XML_SIGNATURE_GOST_ALGORITHM_TYPE["XmlDsigGost3411Url"] = "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr3411";
    /**
     * URL Алгоритм хеширования для XmlDsig, ГОСТ 2001.
     */
    XML_SIGNATURE_GOST_ALGORITHM_TYPE["XmlDsigGost3411UrlObsolete"] = "http://www.w3.org/2001/04/xmldsig-more#gostr3411";
    /**
     * Алгоритм хеширования для XmlDsig, ГОСТ 2012 (256).
     */
    XML_SIGNATURE_GOST_ALGORITHM_TYPE["XmlDsigGost3411Url2012256"] = "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr34112012-256";
    /**
     * Алгоритм подписи для XmlDsig, ГОСТ 2012 (256).
     */
    XML_SIGNATURE_GOST_ALGORITHM_TYPE["XmlDsigGost3410Url2012256"] = "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr34102012-gostr34112012-256";
    /**
     * Алгоритм хеширования для XmlDsig, ГОСТ 2012 (512).
     */
    XML_SIGNATURE_GOST_ALGORITHM_TYPE["XmlDsigGost3411Url2012512"] = "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr34112012-512";
    /**
     * Алгоритм подписи для XmlDsig, ГОСТ 2012 (512).
     */
    XML_SIGNATURE_GOST_ALGORITHM_TYPE["XmlDsigGost3410Url2012512"] = "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr34102012-gostr34112012-512";
})(XML_SIGNATURE_GOST_ALGORITHM_TYPE || (XML_SIGNATURE_GOST_ALGORITHM_TYPE = {}));
/**
 * The CAPICOM_CERTIFICATE_INCLUDE_OPTION enumeration type defines which certificates in a chain are saved.
 * This enumeration type was introduced in CAPICOM 2.0.
 * @see https://docs.microsoft.com/en-us/windows/win32/seccrypto/capicom-certificate-include-option
 */
export var CAPICOM_CERTIFICATE_INCLUDE_OPTION;
(function (CAPICOM_CERTIFICATE_INCLUDE_OPTION) {
    /**
     * Saves all certificates in the chain with the exception of the root entity.
     */
    CAPICOM_CERTIFICATE_INCLUDE_OPTION[CAPICOM_CERTIFICATE_INCLUDE_OPTION["CAPICOM_CERTIFICATE_INCLUDE_CHAIN_EXCEPT_ROOT"] = 0] = "CAPICOM_CERTIFICATE_INCLUDE_CHAIN_EXCEPT_ROOT";
    /**
     * Saves the complete certificate chain.
     */
    CAPICOM_CERTIFICATE_INCLUDE_OPTION[CAPICOM_CERTIFICATE_INCLUDE_OPTION["CAPICOM_CERTIFICATE_INCLUDE_WHOLE_CHAIN"] = 1] = "CAPICOM_CERTIFICATE_INCLUDE_WHOLE_CHAIN";
    /**
     * Saves only the end entity certificate.
     */
    CAPICOM_CERTIFICATE_INCLUDE_OPTION[CAPICOM_CERTIFICATE_INCLUDE_OPTION["CAPICOM_CERTIFICATE_INCLUDE_END_ENTITY_ONLY"] = 2] = "CAPICOM_CERTIFICATE_INCLUDE_END_ENTITY_ONLY";
})(CAPICOM_CERTIFICATE_INCLUDE_OPTION || (CAPICOM_CERTIFICATE_INCLUDE_OPTION = {}));
/**
 * Способ кодирования данных для подписи.
 * @see https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_enum/cadescom_content_encoding_type
 */
export var CADESCOM_ENCODING_TYPE;
(function (CADESCOM_ENCODING_TYPE) {
    /**
     * Data is saved as a base64-encoded string or a pure binary sequence. This encoding type is used only for input data that has an unknown encoding type. Introduced in CAPICOM 2.0.
     */
    CADESCOM_ENCODING_TYPE[CADESCOM_ENCODING_TYPE["CADESCOM_ENCODE_ANY"] = -1] = "CADESCOM_ENCODE_ANY";
    /**
     * Data is saved as a base64-encoded string.
     */
    CADESCOM_ENCODING_TYPE[CADESCOM_ENCODING_TYPE["CADESCOM_ENCODE_BASE64"] = 0] = "CADESCOM_ENCODE_BASE64";
    /**
     * Data is saved as a pure binary sequence.
     */
    CADESCOM_ENCODING_TYPE[CADESCOM_ENCODING_TYPE["CADESCOM_ENCODE_BINARY"] = 1] = "CADESCOM_ENCODE_BINARY";
})(CADESCOM_ENCODING_TYPE || (CADESCOM_ENCODING_TYPE = {}));
/**
 * Enumeration type indicates the encoding type used.
 * @see https://docs.microsoft.com/en-us/windows/win32/seccrypto/capicom-encoding-type
 */
export var CAPICOM_ENCODING_TYPE;
(function (CAPICOM_ENCODING_TYPE) {
    /**
     * Data is saved as a base64-encoded string or a pure binary sequence. This encoding type is used only for input data that has an unknown encoding type. Introduced in CAPICOM 2.0.
     */
    CAPICOM_ENCODING_TYPE[CAPICOM_ENCODING_TYPE["CAPICOM_ENCODE_ANY"] = 4294967295] = "CAPICOM_ENCODE_ANY";
    /**
     * Data is saved as a base64-encoded string.
     */
    CAPICOM_ENCODING_TYPE[CAPICOM_ENCODING_TYPE["CAPICOM_ENCODE_BASE64"] = 0] = "CAPICOM_ENCODE_BASE64";
    /**
     * Data is saved as a pure binary sequence.
     */
    CAPICOM_ENCODING_TYPE[CAPICOM_ENCODING_TYPE["CAPICOM_ENCODE_BINARY"] = 1] = "CAPICOM_ENCODE_BINARY";
})(CAPICOM_ENCODING_TYPE || (CAPICOM_ENCODING_TYPE = {}));
/**
 * Используется как параметр при открытии Хранилища через @see https://docs.microsoft.com/en-us/windows/win32/seccrypto/store-open
 * Позволяет задать уровень доступа к открываемому Хранилищу.
 * @see https://docs.microsoft.com/en-us/windows/win32/seccrypto/capicom-store-open-mode
 */
export var CAPICOM_STORE_OPEN_MODE;
(function (CAPICOM_STORE_OPEN_MODE) {
    /**
     * Open the store in read-only mode.
     */
    CAPICOM_STORE_OPEN_MODE[CAPICOM_STORE_OPEN_MODE["CAPICOM_STORE_OPEN_READ_ONLY"] = 0] = "CAPICOM_STORE_OPEN_READ_ONLY";
    /**
     * Open the store in read/write mode.
     */
    CAPICOM_STORE_OPEN_MODE[CAPICOM_STORE_OPEN_MODE["CAPICOM_STORE_OPEN_READ_WRITE"] = 1] = "CAPICOM_STORE_OPEN_READ_WRITE";
    /**
     * Open the store in read/write mode if the user has read/write permissions. If the user does not have read/write permissions, open the store in read-only mode.
     */
    CAPICOM_STORE_OPEN_MODE[CAPICOM_STORE_OPEN_MODE["CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED"] = 2] = "CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED";
    /**
     * Open existing stores only; do not create a new store. Introduced by CAPICOM 2.0.
     */
    CAPICOM_STORE_OPEN_MODE[CAPICOM_STORE_OPEN_MODE["CAPICOM_STORE_OPEN_EXISTING_ONLY"] = 128] = "CAPICOM_STORE_OPEN_EXISTING_ONLY";
    /**
     * Include archived certificates when using the store. Introduced by CAPICOM 2.0.
     */
    CAPICOM_STORE_OPEN_MODE[CAPICOM_STORE_OPEN_MODE["CAPICOM_STORE_OPEN_INCLUDE_ARCHIVED"] = 256] = "CAPICOM_STORE_OPEN_INCLUDE_ARCHIVED";
})(CAPICOM_STORE_OPEN_MODE || (CAPICOM_STORE_OPEN_MODE = {}));
/**
 * Типы для указания расположения хранилища сертификатов.
 * @see https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_enum/cadescom_store_location
 * @see https://docs.microsoft.com/en-us/windows/win32/seccrypto/capicom-store-location
 */
export var STORE_LOCATION;
(function (STORE_LOCATION) {
    /**
     * Хранилище сертификатов в памяти компьютера. Любые изменения недопустимы.
     */
    STORE_LOCATION[STORE_LOCATION["CAPICOM_MEMORY_STORE"] = 0] = "CAPICOM_MEMORY_STORE";
    STORE_LOCATION[STORE_LOCATION["CADESCOM_MEMORY_STORE"] = 0] = "CADESCOM_MEMORY_STORE";
    /**
     * Хранилище сертификатов компьютера. Если открыто на чтение/запись, то у вас есть права на изменения.
     */
    STORE_LOCATION[STORE_LOCATION["CAPICOM_LOCAL_MACHINE_STORE"] = 1] = "CAPICOM_LOCAL_MACHINE_STORE";
    STORE_LOCATION[STORE_LOCATION["CADESCOM_LOCAL_MACHINE_STORE"] = 1] = "CADESCOM_LOCAL_MACHINE_STORE";
    /**
     * Хранилище сертификатов текущего пользователя. Доступ для изменения доступен для текущего пользователя.
     */
    STORE_LOCATION[STORE_LOCATION["CAPICOM_CURRENT_USER_STORE"] = 2] = "CAPICOM_CURRENT_USER_STORE";
    STORE_LOCATION[STORE_LOCATION["CADESCOM_CURRENT_USER_STORE"] = 2] = "CADESCOM_CURRENT_USER_STORE";
    /**
     * Хранилище сертификатов в Active Directory.. Доступно только для чтения. Нельзя добавить или удалить сертификаты из данного хранилища.
     */
    STORE_LOCATION[STORE_LOCATION["CAPICOM_ACTIVE_DIRECTORY_USER_STORE"] = 3] = "CAPICOM_ACTIVE_DIRECTORY_USER_STORE";
    /**
     * Хранилище сертификатов на смарткартах (поддерживается только с КриптоПро CSP 5.0.11823 и выше). Объявлено и доступно с CAPICOM 2.0.
     */
    STORE_LOCATION[STORE_LOCATION["CAPICOM_SMART_CARD_USER_STORE"] = 4] = "CAPICOM_SMART_CARD_USER_STORE";
    /**
     * Хранилище сертификатов из контейнеров закрытых ключей. В данный Store попадают все сертификаты из контейнеров закрытых ключей, которые доступны в системе в момент открытия.
     * Доступно с CAdESCOM Plugin 2.0.13292
     */
    STORE_LOCATION[STORE_LOCATION["CADESCOM_CONTAINER_STORE"] = 100] = "CADESCOM_CONTAINER_STORE";
})(STORE_LOCATION || (STORE_LOCATION = {}));
/**
 * The CAPICOM_CERT_INFO_TYPE enumeration type defines what information is to be queried from a certificate.
 * @see https://docs.microsoft.com/en-us/windows/win32/seccrypto/capicom-cert-info-type
 * @type {number}
 */
export var CAPICOM_CERT_INFO_TYPE;
(function (CAPICOM_CERT_INFO_TYPE) {
    /**
     * Returns the display name from the certificate subject.
     */
    CAPICOM_CERT_INFO_TYPE[CAPICOM_CERT_INFO_TYPE["CAPICOM_CERT_INFO_SUBJECT_SIMPLE_NAME"] = 0] = "CAPICOM_CERT_INFO_SUBJECT_SIMPLE_NAME";
    /**
     * Returns the display name of the issuer of the certificate.
     */
    CAPICOM_CERT_INFO_TYPE[CAPICOM_CERT_INFO_TYPE["CAPICOM_CERT_INFO_ISSUER_SIMPLE_NAME"] = 1] = "CAPICOM_CERT_INFO_ISSUER_SIMPLE_NAME";
    /**
     * Returns the email address of the certificate subject.
     */
    CAPICOM_CERT_INFO_TYPE[CAPICOM_CERT_INFO_TYPE["CAPICOM_CERT_INFO_SUBJECT_EMAIL_NAME"] = 2] = "CAPICOM_CERT_INFO_SUBJECT_EMAIL_NAME";
    /**
     * Returns the email address of the issuer of the certificate.
     */
    CAPICOM_CERT_INFO_TYPE[CAPICOM_CERT_INFO_TYPE["CAPICOM_CERT_INFO_ISSUER_EMAIL_NAME"] = 3] = "CAPICOM_CERT_INFO_ISSUER_EMAIL_NAME";
    /**
     * Returns the UPN of the certificate subject. Introduced in CAPICOM 2.0.
     */
    CAPICOM_CERT_INFO_TYPE[CAPICOM_CERT_INFO_TYPE["CAPICOM_CERT_INFO_SUBJECT_UPN"] = 4] = "CAPICOM_CERT_INFO_SUBJECT_UPN";
    /**
     * Returns the UPN of the issuer of the certificate. Introduced in CAPICOM 2.0.
     */
    CAPICOM_CERT_INFO_TYPE[CAPICOM_CERT_INFO_TYPE["CAPICOM_CERT_INFO_ISSUER_UPN"] = 5] = "CAPICOM_CERT_INFO_ISSUER_UPN";
    /**
     * Returns the DNS name of the certificate subject. Introduced in CAPICOM 2.0.
     */
    CAPICOM_CERT_INFO_TYPE[CAPICOM_CERT_INFO_TYPE["CAPICOM_CERT_INFO_SUBJECT_DNS_NAME"] = 6] = "CAPICOM_CERT_INFO_SUBJECT_DNS_NAME";
    /**
     * Returns the DNS name of the issuer of the certificate. Introduced in CAPICOM 2.0.
     */
    CAPICOM_CERT_INFO_TYPE[CAPICOM_CERT_INFO_TYPE["CAPICOM_CERT_INFO_ISSUER_DNS_NAME"] = 7] = "CAPICOM_CERT_INFO_ISSUER_DNS_NAME";
})(CAPICOM_CERT_INFO_TYPE || (CAPICOM_CERT_INFO_TYPE = {}));
/**
 * The CAPICOM_CERTIFICATE_FIND_TYPE enumeration type defines the type of search criteria used to find specific certificates. This enumeration type was introduced in CAPICOM 2.0.
 * @see https://docs.microsoft.com/en-us/windows/win32/seccrypto/capicom-certificate-find-type
 * @type {number}
 */
export var CAPICOM_CERTIFICATE_FIND_TYPE;
(function (CAPICOM_CERTIFICATE_FIND_TYPE) {
    /**
     * Returns certificates matching a specified SHA1 hash.
     */
    CAPICOM_CERTIFICATE_FIND_TYPE[CAPICOM_CERTIFICATE_FIND_TYPE["CAPICOM_CERTIFICATE_FIND_SHA1_HASH"] = 0] = "CAPICOM_CERTIFICATE_FIND_SHA1_HASH";
    /**
     * Returns certificates whose subject name exactly or partially matches a specified subject name.
     */
    CAPICOM_CERTIFICATE_FIND_TYPE[CAPICOM_CERTIFICATE_FIND_TYPE["CAPICOM_CERTIFICATE_FIND_SUBJECT_NAME"] = 1] = "CAPICOM_CERTIFICATE_FIND_SUBJECT_NAME";
    /**
     * Returns certificates whose issuer name exactly or partially matches a specified issuer name.
     */
    CAPICOM_CERTIFICATE_FIND_TYPE[CAPICOM_CERTIFICATE_FIND_TYPE["CAPICOM_CERTIFICATE_FIND_ISSUER_NAME"] = 2] = "CAPICOM_CERTIFICATE_FIND_ISSUER_NAME";
    /**
     * Returns certificates whose root subject name exactly or partially matches a specified root subject name.
     */
    CAPICOM_CERTIFICATE_FIND_TYPE[CAPICOM_CERTIFICATE_FIND_TYPE["CAPICOM_CERTIFICATE_FIND_ROOT_NAME"] = 3] = "CAPICOM_CERTIFICATE_FIND_ROOT_NAME";
    /**
     * Returns certificates whose template name matches a specified template name.
     */
    CAPICOM_CERTIFICATE_FIND_TYPE[CAPICOM_CERTIFICATE_FIND_TYPE["CAPICOM_CERTIFICATE_FIND_TEMPLATE_NAME"] = 4] = "CAPICOM_CERTIFICATE_FIND_TEMPLATE_NAME";
    /**
     * Returns certificates that have an extension that matches a specified extension.
     */
    CAPICOM_CERTIFICATE_FIND_TYPE[CAPICOM_CERTIFICATE_FIND_TYPE["CAPICOM_CERTIFICATE_FIND_EXTENSION"] = 5] = "CAPICOM_CERTIFICATE_FIND_EXTENSION";
    /**
     * Returns certificates that have an extended property whose property identifier matches a specified property identifier.
     */
    CAPICOM_CERTIFICATE_FIND_TYPE[CAPICOM_CERTIFICATE_FIND_TYPE["CAPICOM_CERTIFICATE_FIND_EXTENDED_PROPERTY"] = 6] = "CAPICOM_CERTIFICATE_FIND_EXTENDED_PROPERTY";
    /**
     * Returns certificates in the store that have either an enhanced key usage extension or property combined with a usage identifier.
     */
    CAPICOM_CERTIFICATE_FIND_TYPE[CAPICOM_CERTIFICATE_FIND_TYPE["CAPICOM_CERTIFICATE_FIND_APPLICATION_POLICY"] = 7] = "CAPICOM_CERTIFICATE_FIND_APPLICATION_POLICY";
    /**
     * Returns certificates containing a specified policy OID.
     */
    CAPICOM_CERTIFICATE_FIND_TYPE[CAPICOM_CERTIFICATE_FIND_TYPE["CAPICOM_CERTIFICATE_FIND_CERTIFICATE_POLICY"] = 8] = "CAPICOM_CERTIFICATE_FIND_CERTIFICATE_POLICY";
    /**
     * Returns certificates whose time is valid.
     */
    CAPICOM_CERTIFICATE_FIND_TYPE[CAPICOM_CERTIFICATE_FIND_TYPE["CAPICOM_CERTIFICATE_FIND_TIME_VALID"] = 9] = "CAPICOM_CERTIFICATE_FIND_TIME_VALID";
    /**
     * Returns certificates whose time is not yet valid.
     */
    CAPICOM_CERTIFICATE_FIND_TYPE[CAPICOM_CERTIFICATE_FIND_TYPE["CAPICOM_CERTIFICATE_FIND_TIME_NOT_YET_VALID"] = 10] = "CAPICOM_CERTIFICATE_FIND_TIME_NOT_YET_VALID";
    /**
     * Returns certificates whose time has expired.
     */
    CAPICOM_CERTIFICATE_FIND_TYPE[CAPICOM_CERTIFICATE_FIND_TYPE["CAPICOM_CERTIFICATE_FIND_TIME_EXPIRED"] = 11] = "CAPICOM_CERTIFICATE_FIND_TIME_EXPIRED";
    /**
     * Returns certificates containing a key that can be used in the specified manner.
     */
    CAPICOM_CERTIFICATE_FIND_TYPE[CAPICOM_CERTIFICATE_FIND_TYPE["CAPICOM_CERTIFICATE_FIND_KEY_USAGE"] = 12] = "CAPICOM_CERTIFICATE_FIND_KEY_USAGE";
})(CAPICOM_CERTIFICATE_FIND_TYPE || (CAPICOM_CERTIFICATE_FIND_TYPE = {}));
/**
 * The CAPICOM_KEY_USAGE enumeration defines the ways in which a key can be used. Introduced in CAPICOM 2.0.
 * @see https://docs.microsoft.com/en-us/windows/win32/seccrypto/capicom-key-usage
 * @type {number}
 */
export var CAPICOM_KEY_USAGE;
(function (CAPICOM_KEY_USAGE) {
    /**
     * The key can be used to create a digital signature.
     */
    CAPICOM_KEY_USAGE[CAPICOM_KEY_USAGE["CAPICOM_DIGITAL_SIGNATURE_KEY_USAGE"] = 128] = "CAPICOM_DIGITAL_SIGNATURE_KEY_USAGE";
    // other enums omited.
})(CAPICOM_KEY_USAGE || (CAPICOM_KEY_USAGE = {}));
//region (cert.Find(..)) https://docs.microsoft.com/en-us/windows/win32/seccrypto/capicom-propid
/**
 * Возвращает DWORD значение, указывающее на закрытый ключ из
 *  CERT_KEY_CONTEXT_PROP_ID, если он есть.
 *  Иначе, если CERT_KEY_PROV_INFO_PROP_ID есть,
 *  то он будет источником dwKeySpec.
 *  (Find(CAPICOM_CERTIFICATE_FIND_EXTENDED_PROPERTY,CERT_KEY_SPEC_PROP_ID)
 *   - вернет сертификаты, у к-ых есть ссылка на закрытый ключ)
 * @type {number}
 */
export var CERT_KEY_SPEC_PROP_ID = 6;
/**
 * Свойства хэш объекта.
 * @see https://docs.microsoft.com/en-us/windows/win32/seccrypto/capicom-propid
 * @type {number}
 */
export var CAPICOM_PROPID;
(function (CAPICOM_PROPID) {
    /**
     * Неизвестный тип свойства.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_UNKNOWN"] = 0] = "CAPICOM_PROPID_UNKNOWN";
    /**
     * Обработчик ключа контейнера с Криптопровайдером.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_KEY_PROV_HANDLE"] = 1] = "CAPICOM_PROPID_KEY_PROV_HANDLE";
    /**
     * Вывод только сертификатов с информацией о контейнерах с Криптопровайдером.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_KEY_PROV_INFO"] = 2] = "CAPICOM_PROPID_KEY_PROV_INFO";
    /**
     * The properties of a hash object.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_HASH_PROP"] = 3] = "CAPICOM_PROPID_HASH_PROP";
    /**
     * A SHA1 hash object.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_SHA1_HASH"] = 3] = "CAPICOM_PROPID_SHA1_HASH";
    /**
     * An MD5 hash object.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_MD5_HASH"] = 4] = "CAPICOM_PROPID_MD5_HASH";
    /**
     * The key context.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_KEY_CONTEXT"] = 5] = "CAPICOM_PROPID_KEY_CONTEXT";
    /**
     * The specifications for a key.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_KEY_SPEC"] = 6] = "CAPICOM_PROPID_KEY_SPEC";
    /**
     * Information about whether the hash of the public key is reserved.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_PUBKEY_HASH_RESERVED"] = 8] = "CAPICOM_PROPID_PUBKEY_HASH_RESERVED";
    /**
     * A certificate trust list (CTL) usage.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_CTL_USAGE"] = 9] = "CAPICOM_PROPID_CTL_USAGE";
    /**
     * An enhanced key usage (EKU).
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_ENHKEY_USAGE"] = 9] = "CAPICOM_PROPID_ENHKEY_USAGE";
    /**
     * The location of the next update to the certificate revocation list (CRL).
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_NEXT_UPDATE_LOCATION"] = 10] = "CAPICOM_PROPID_NEXT_UPDATE_LOCATION";
    /**
     * A human-readable name.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_FRIENDLY_NAME"] = 11] = "CAPICOM_PROPID_FRIENDLY_NAME";
    /**
     * A file that contains a private key.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_PVK_FILE"] = 12] = "CAPICOM_PROPID_PVK_FILE";
    /**
     * A human-readable description.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_DESCRIPTION"] = 13] = "CAPICOM_PROPID_DESCRIPTION";
    /**
     * The state of the access.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_ACCESS_STATE"] = 14] = "CAPICOM_PROPID_ACCESS_STATE";
    /**
     * A hash of the signature.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_SIGNATURE_HASH"] = 15] = "CAPICOM_PROPID_SIGNATURE_HASH";
    /**
     * Smart card data.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_SMART_CARD_DATA"] = 16] = "CAPICOM_PROPID_SMART_CARD_DATA";
    /**
     * An Encrypting File System (EFS).
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_EFS"] = 17] = "CAPICOM_PROPID_EFS";
    /**
     * Data created using the cryptographic protocols and algorithms owned by the National Institute of Standards and Technology (NIST).
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_FORTEZZA_DATA"] = 18] = "CAPICOM_PROPID_FORTEZZA_DATA";
    /**
     * Information about whether the object is archived.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_ARCHIVED"] = 19] = "CAPICOM_PROPID_ARCHIVED";
    /**
     * A key identifier.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_KEY_IDENTIFIER"] = 20] = "CAPICOM_PROPID_KEY_IDENTIFIER";
    /**
     * Auto-enrollment information for a certificate.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_AUTO_ENROLL"] = 21] = "CAPICOM_PROPID_AUTO_ENROLL";
    /**
     * Parameters for a public key algorithm.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_PUBKEY_ALG_PARA"] = 22] = "CAPICOM_PROPID_PUBKEY_ALG_PARA";
    /**
     * Information used to update dynamic cross certificates.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_CROSS_CERT_DIST_POINTS"] = 23] = "CAPICOM_PROPID_CROSS_CERT_DIST_POINTS";
    /**
     * Information about whether the object is reserved in Internet Explorer 3.0.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_ISSUER_PUBLIC_KEY_MD5_HASH"] = 24] = "CAPICOM_PROPID_ISSUER_PUBLIC_KEY_MD5_HASH";
    /**
     * The MD5 hash of the subject's public key.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_SUBJECT_PUBLIC_KEY_MD5_HASH"] = 25] = "CAPICOM_PROPID_SUBJECT_PUBLIC_KEY_MD5_HASH";
    /**
     * Information about the certificate's enrollment.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_ENROLLMENT"] = 26] = "CAPICOM_PROPID_ENROLLMENT";
    /**
     * A date stamp.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_DATE_STAMP"] = 27] = "CAPICOM_PROPID_DATE_STAMP";
    /**
     * The MD5 hash of the issuer's serial number.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_ISSUER_SERIAL_NUMBER_MD5_HASH"] = 28] = "CAPICOM_PROPID_ISSUER_SERIAL_NUMBER_MD5_HASH";
    /**
     * The MD5 hash of the subject's name.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_SUBJECT_NAME_MD5_HASH"] = 29] = "CAPICOM_PROPID_SUBJECT_NAME_MD5_HASH";
    /**
     * Extended information about an error.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_EXTENDED_ERROR_INFO"] = 30] = "CAPICOM_PROPID_EXTENDED_ERROR_INFO";
    /**
     * Information about the renewal of a certification authority.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_RENEWAL"] = 64] = "CAPICOM_PROPID_RENEWAL";
    /**
     * An archived hash of a key.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_ARCHIVED_KEY_HASH"] = 65] = "CAPICOM_PROPID_ARCHIVED_KEY_HASH";
    /**
     * Information about the first reservation.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_FIRST_RESERVED"] = 66] = "CAPICOM_PROPID_FIRST_RESERVED";
    /**
     * Information about the most recent reservation.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_LAST_RESERVED"] = 32767] = "CAPICOM_PROPID_LAST_RESERVED";
    /**
     * Information about the first user.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_FIRST_USER"] = 32768] = "CAPICOM_PROPID_FIRST_USER";
    /**
     * Information about the most recent user.
     */
    CAPICOM_PROPID[CAPICOM_PROPID["CAPICOM_PROPID_LAST_USER"] = 65535] = "CAPICOM_PROPID_LAST_USER";
})(CAPICOM_PROPID || (CAPICOM_PROPID = {}));
export var CAPICOM_OID_OTHER = 0;
export var CAPICOM_OID_KEY_USAGE_EXTENSION = 10;
export var CAPICOM_EKU_CLIENT_AUTH = 2;
export var CAPICOM_EKU_SMARTCARD_LOGON = 5;
export var CAPICOM_EKU_OTHER = 0;
export var CAPICOM_AUTHENTICATED_ATTRIBUTE_SIGNING_TIME = 0;
export var CAPICOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_NAME = 1;
export var CAPICOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_DESCRIPTION = 2;
export var CADESCOM_AUTHENTICATED_ATTRIBUTE_SIGNING_TIME = 0;
export var CADESCOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_NAME = 1;
export var CADESCOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_DESCRIPTION = 2;
export var CADESCOM_AUTHENTICATED_ATTRIBUTE_MACHINE_INFO = 0x100;
export var CADESCOM_ATTRIBUTE_OTHER = -1;
export var CADESCOM_STRING_TO_UCS2LE = 0;
export var CADESCOM_BASE64_TO_BINARY = 1;
export var CADESCOM_DISPLAY_DATA_NONE = 0;
export var CADESCOM_DISPLAY_DATA_CONTENT = 1;
export var CADESCOM_DISPLAY_DATA_ATTRIBUTE = 2;
/**
 * Тип алгоритма шифрования.
 * @see https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_enum/cadescom_encryption_algorithm
 */
export var CADESCOM_ENCRYPTION_ALGORITHM;
(function (CADESCOM_ENCRYPTION_ALGORITHM) {
    /**
     * Алгоритм RSA RC2.
     */
    CADESCOM_ENCRYPTION_ALGORITHM[CADESCOM_ENCRYPTION_ALGORITHM["CADESCOM_ENCRYPTION_ALGORITHM_RC2"] = 0] = "CADESCOM_ENCRYPTION_ALGORITHM_RC2";
    /**
     * Алгоритм RSA RC4.
     */
    CADESCOM_ENCRYPTION_ALGORITHM[CADESCOM_ENCRYPTION_ALGORITHM["CADESCOM_ENCRYPTION_ALGORITHM_RC4"] = 1] = "CADESCOM_ENCRYPTION_ALGORITHM_RC4";
    /**
     * Алгоритм DES.
     */
    CADESCOM_ENCRYPTION_ALGORITHM[CADESCOM_ENCRYPTION_ALGORITHM["CADESCOM_ENCRYPTION_ALGORITHM_DES"] = 2] = "CADESCOM_ENCRYPTION_ALGORITHM_DES";
    /**
     * Алгоритм 3DES.
     */
    CADESCOM_ENCRYPTION_ALGORITHM[CADESCOM_ENCRYPTION_ALGORITHM["CADESCOM_ENCRYPTION_ALGORITHM_3DES"] = 3] = "CADESCOM_ENCRYPTION_ALGORITHM_3DES";
    /**
     * Алгоритм AES.
     */
    CADESCOM_ENCRYPTION_ALGORITHM[CADESCOM_ENCRYPTION_ALGORITHM["CADESCOM_ENCRYPTION_ALGORITHM_AES"] = 4] = "CADESCOM_ENCRYPTION_ALGORITHM_AES";
    /**
     * Алгоритм ГОСТ 28147-89.
     */
    CADESCOM_ENCRYPTION_ALGORITHM[CADESCOM_ENCRYPTION_ALGORITHM["CADESCOM_ENCRYPTION_ALGORITHM_GOST_28147_89"] = 25] = "CADESCOM_ENCRYPTION_ALGORITHM_GOST_28147_89";
})(CADESCOM_ENCRYPTION_ALGORITHM || (CADESCOM_ENCRYPTION_ALGORITHM = {}));
/**
 * Тип алгоритма хэширования.
 * @see https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_enum/cadescom_hash_algorithm
 */
export var CADESCOM_HASH_ALGORITHM;
(function (CADESCOM_HASH_ALGORITHM) {
    /**
     * Алгоритм SHA1.
     */
    CADESCOM_HASH_ALGORITHM[CADESCOM_HASH_ALGORITHM["CADESCOM_HASH_ALGORITHM_SHA1"] = 0] = "CADESCOM_HASH_ALGORITHM_SHA1";
    /**
     * Алгоритм MD2.
     */
    CADESCOM_HASH_ALGORITHM[CADESCOM_HASH_ALGORITHM["CADESCOM_HASH_ALGORITHM_MD2"] = 1] = "CADESCOM_HASH_ALGORITHM_MD2";
    /**
     * Алгоритм MD4.
     */
    CADESCOM_HASH_ALGORITHM[CADESCOM_HASH_ALGORITHM["CADESCOM_HASH_ALGORITHM_MD4"] = 2] = "CADESCOM_HASH_ALGORITHM_MD4";
    /**
     * Алгоритм MD5.
     */
    CADESCOM_HASH_ALGORITHM[CADESCOM_HASH_ALGORITHM["CADESCOM_HASH_ALGORITHM_MD5"] = 3] = "CADESCOM_HASH_ALGORITHM_MD5";
    /**
     * Алгоритм SHA1 с длиной ключа 256 бит.
     */
    CADESCOM_HASH_ALGORITHM[CADESCOM_HASH_ALGORITHM["CADESCOM_HASH_ALGORITHM_SHA_256"] = 4] = "CADESCOM_HASH_ALGORITHM_SHA_256";
    /**
     * Алгоритм SHA1 с длиной ключа 384 бита.
     */
    CADESCOM_HASH_ALGORITHM[CADESCOM_HASH_ALGORITHM["CADESCOM_HASH_ALGORITHM_SHA_384"] = 5] = "CADESCOM_HASH_ALGORITHM_SHA_384";
    /**
     * Алгоритм SHA1 с длиной ключа 512 бит.
     */
    CADESCOM_HASH_ALGORITHM[CADESCOM_HASH_ALGORITHM["CADESCOM_HASH_ALGORITHM_SHA_512"] = 6] = "CADESCOM_HASH_ALGORITHM_SHA_512";
    /**
     * Алгоритм ГОСТ Р 34.11-94.
     */
    CADESCOM_HASH_ALGORITHM[CADESCOM_HASH_ALGORITHM["CADESCOM_HASH_ALGORITHM_CP_GOST_3411"] = 100] = "CADESCOM_HASH_ALGORITHM_CP_GOST_3411";
    /**
     * Алгоритм ГОСТ Р 34.11-2012 с длиной ключа 256 бит.
     */
    CADESCOM_HASH_ALGORITHM[CADESCOM_HASH_ALGORITHM["CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256"] = 101] = "CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256";
    /**
     * 	Алгоритм ГОСТ Р 34.11-2012 с длиной ключа 512 бит.
     */
    CADESCOM_HASH_ALGORITHM[CADESCOM_HASH_ALGORITHM["CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_512"] = 102] = "CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_512";
    /**
     * Алгоритм ГОСТ Р 34.11-94 HMAC.
     */
    CADESCOM_HASH_ALGORITHM[CADESCOM_HASH_ALGORITHM["CADESCOM_HASH_ALGORITHM_CP_GOST_3411_HMAC"] = 110] = "CADESCOM_HASH_ALGORITHM_CP_GOST_3411_HMAC";
    /**
     * Алгоритм ГОСТ Р 34.11-2012 HMAC.
     */
    CADESCOM_HASH_ALGORITHM[CADESCOM_HASH_ALGORITHM["CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256_HMAC"] = 111] = "CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256_HMAC";
    /**
     * Алгоритм ГОСТ Р 34.11-2012 HMAC.
     */
    CADESCOM_HASH_ALGORITHM[CADESCOM_HASH_ALGORITHM["CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_512_HMAC"] = 112] = "CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_512_HMAC";
})(CADESCOM_HASH_ALGORITHM || (CADESCOM_HASH_ALGORITHM = {}));
export var CADESCOM_AllowNone = 0;
export var CADESCOM_AllowNoOutstandingRequest = 0x1;
export var CADESCOM_AllowUntrustedCertificate = 0x2;
export var CADESCOM_AllowUntrustedRoot = 0x4;
export var CADESCOM_SkipInstallToStore = 0x10000000;
export var CADESCOM_InstallCertChainToContainer = 0x20000000;
export var CADESCOM_UseContainerStore = 0x40000000;
export var ENABLE_CARRIER_TYPE_CSP = 0x01;
export var ENABLE_CARRIER_TYPE_FKC_NO_SM = 0x02;
export var ENABLE_CARRIER_TYPE_FKC_SM = 0x04;
export var ENABLE_ANY_CARRIER_TYPE = 0x07;
export var DISABLE_EVERY_CARRIER_OPERATION = 0x00;
export var ENABLE_CARRIER_OPEN_ENUM = 0x01;
export var ENABLE_CARRIER_CREATE = 0x02;
export var ENABLE_ANY_OPERATION = 0x03;
export var CADESCOM_PRODUCT_CSP = 0;
export var CADESCOM_PRODUCT_OCSP = 1;
export var CADESCOM_PRODUCT_TSP = 2;
/**
 * Тип медиа.
 * @see https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_enum/cadescom_media_type
 */
export var CADESCOM_MEDIA_TYPE;
(function (CADESCOM_MEDIA_TYPE) {
    /**
     * Реестр.
     */
    CADESCOM_MEDIA_TYPE[CADESCOM_MEDIA_TYPE["MEDIA_TYPE_REGISTRY"] = 1] = "MEDIA_TYPE_REGISTRY";
    /**
     * Жесткий диск.
     */
    CADESCOM_MEDIA_TYPE[CADESCOM_MEDIA_TYPE["MEDIA_TYPE_HDIMAGE"] = 2] = "MEDIA_TYPE_HDIMAGE";
    /**
     * Облачный носитель.
     */
    CADESCOM_MEDIA_TYPE[CADESCOM_MEDIA_TYPE["MEDIA_TYPE_CLOUD"] = 4] = "MEDIA_TYPE_CLOUD";
    /**
     * Смарт-карта или любое другое устройство с интерфейсом смарт-карты.
     */
    CADESCOM_MEDIA_TYPE[CADESCOM_MEDIA_TYPE["MEDIA_TYPE_SCARD"] = 8] = "MEDIA_TYPE_SCARD";
})(CADESCOM_MEDIA_TYPE || (CADESCOM_MEDIA_TYPE = {}));
export var XCN_CRYPT_STRING_BASE64HEADER = 0;
export var AT_KEYEXCHANGE = 1;
export var AT_SIGNATURE = 2;
export var CARRIER_FLAG_REMOVABLE = 1;
export var CARRIER_FLAG_UNIQUE = 2;
export var CARRIER_FLAG_PROTECTED = 4;
export var CARRIER_FLAG_FUNCTIONAL_CARRIER = 8;
export var CARRIER_FLAG_SECURE_MESSAGING = 16;
export var CARRIER_FLAG_ABLE_VISUALISE_SIGNATURE = 64;
export var CARRIER_FLAG_VIRTUAL = 128;
/**
 * Список крипто-объектов для передачи в createObject, (cadesplugin|capicom).CreateObject|CreateObjectAsync()
 */
export var CRYPTO_OBJECTS;
(function (CRYPTO_OBJECTS) {
    /**
     * Объект позволяющий взаимодействовать с хранилищем сертификатов.
     * @see https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_class/store
     */
    CRYPTO_OBJECTS["store"] = "CAdESCOM.Store";
    /**
     * Объект задающий параметры создания и содержащий информацию об усовершенствованной подписи.
     * @see https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_class/cpsigner
     */
    CRYPTO_OBJECTS["signer"] = "CAdESCOM.CPSigner";
    /**
     * Объект задающий способ подписания Xml файла.
     * @see https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_class/signedxml
     */
    CRYPTO_OBJECTS["signedXml"] = "CAdESCOM.SignedXML";
    /**
     * Объект предоставляет свойства и методы для работы с подписанным документом XML.
     * @see https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_class/about
     */
    CRYPTO_OBJECTS["about"] = "CAdESCOM.About";
    /**
     * Объект предоставляет функционал по усовершенствованной подписи.
     * @see https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_class/cadessigneddata
     */
    CRYPTO_OBJECTS["signedData"] = "CAdESCOM.CadesSignedData";
    /**
     * Объект предоставляет функционал для вычисления хэша.
     * @see https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_class/cphasheddata
     */
    CRYPTO_OBJECTS["hashedData"] = "CAdESCOM.HashedData";
    /**
     * Объект предоставляет функционал по шифрованию/расшифровке сообщения.
     * @see https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_class/cpenvelopeddata
     */
    CRYPTO_OBJECTS["envelopedData"] = "CAdESCOM.CPEnvelopedData";
    /**
     * Объект сертификат.
     * @see https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_class/cpcertificate
     */
    CRYPTO_OBJECTS["certificate"] = "CAdESCOM.Certificate";
    /**
     * Объект позволяет получить информацию о доступных криптопровайдерах.
     * @see https://docs.cryptopro.ru/cades/plugin/certenroll/ccspinformations?id=ccspinformations
     */
    CRYPTO_OBJECTS["cspInformations"] = "X509Enrollment.CCspInformations";
})(CRYPTO_OBJECTS || (CRYPTO_OBJECTS = {}));
