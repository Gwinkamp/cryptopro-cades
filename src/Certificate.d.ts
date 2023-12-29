import type { ICertificate } from './types';
/**
 * Класс объекта Сертификата для удобной работы.
 * !!! НЕ является имплементацией @see ICertificate (к-ый является интерфейсом Крипто системы ОС).
 * @class Certificate
 */
export declare class Certificate {
    /**
     * Данные о владельце сертификата.
     * @remarks названия полей должны совпадать с @attributeOids в oids-dictionary.ts
     */
    subject: {
        commonName: string | null;
        surname: string | null;
        name: string | null;
        country: string | null;
        region: string | null;
        locality: string | null;
        street: string | null;
        organization: string | null;
        department: string | null;
        post: string | null;
        ogrnip: string | null;
        ogrn: string | null;
        snils: string | null;
        innLe: string | null;
        inn: string | null;
        email: string | null;
    };
    /**
     * Данные об издателе сертификата.
     * @remarks названия полей должны совпадать с @attributeOids в oids-dictionary.ts
     */
    issuer: {
        commonName: string | null;
        inn: string | null;
        innLe: string | null;
    };
    /**
     *  Отпечаток сертификата (хэш SHA-1).
     * @property {string|null}
     */
    thumbprint: string | null;
    /**
     *  Дата-время с которого сертификат вступает в силу.
     * @property {Date|null}
     */
    notBefore: Date | null;
    /**
     * Дата-время до которого сертификат действует.
     * @property {Date|null}
     */
    notAfter: Date | null;
    /**
     * Имя владельца сертификата.
     * @property {string|null}
     */
    subjectName: string | null;
    /**
     *  Идентификатор субъекта сертификата.
     * @property {string|null}
     */
    subjectKeyId: string | null;
    /**
     * Base64 строка открытой части сертификата.
     * @property {string|null}
     */
    certificateBase64Data: string | null;
    /**
     * Исходный сертификат из плагина.
     * @property {ICertificate|null}
     */
    certificateBin: ICertificate | null;
    /**
     * Имя криптопровайдера.
     * @property {string|null}
     */
    providerName: string | null;
    /**
     * Тип криптопровайдера.
     * @property {number|null}
     */
    providerType: number | null;
    /**
     * Есть ли закрытый ключ.
     * @property {boolean}
     */
    hasPrivateKey: boolean;
    /**
     * Гостовский ключ или нет.
     */
    isGost: boolean;
    /**
     * OID алгоритма ключа.
     */
    algorithm: string | null;
    /**
     * Приватный конструктор.
     * @param cfg сертификат из @see IStore.
     */
    private constructor();
    /**
     * Распарсить сертификат из исходного объекта.
     * @param {ICertificate} cert исходный сертификат.
     * @throws {CryptoError} в случае ошибки.
     * @returns {Promise<Certificate>} распрасенный сертификат.
     */
    static CreateFrom(cert: ICertificate): Promise<Certificate>;
}
