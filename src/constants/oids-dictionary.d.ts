/**
 * Типы ГОСТовских алгоритмов.
 */
export declare enum GOST_KEY_ALGORITHM_TYPES {
    /**
     * Алгоритм ГОСТ Р 34.10-2012 для ключей длины 256 бит.
     */
    GOST_R3410_12_256 = "1.2.643.7.1.1.1.1",
    /**
     * Алгоритм ГОСТ Р 34.10-2012 для ключей длины 512 бит
     */
    GOST_R3410_12_512 = "1.2.643.7.1.1.1.2"
}
/**
 * OID ГОСТовских алгоритмов.
 */
export declare const GOST_KEY_ALGORITHM_OIDS: string[];
/**
 * OID SubjectKeyId расширения в сертификате.
 */
export declare const subjectKeyIdExtensionOid = "2.5.29.14";
/**
 * OID атрибутов сертификата.
 */
export declare const attributeOids: {
    commonName: string;
    surname: string;
    name: string;
    country: string;
    locality: string;
    region: string;
    street: string;
    organisation: string;
    department: string;
    post: string;
    ogrnip: string;
    ogrn: string;
    snils: string;
    inn: string;
    innLe: string;
    email: string;
};
