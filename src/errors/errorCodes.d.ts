/**
 * Список возможных ошибок при работе с API CryptoPro Browser Plugin.
 * Это ошибки могут быть как от криптопровайдера (CSP), так и от операционной системы пользователя.
 * Часть ошибок описана тут @see https://docs.cryptopro.ru/pki/introduction/dllerrors
 * @type {{code: string, message: string}[]}
 */
export declare const CRYPTO_PRO_ERRORS: readonly {
    code: string;
    message: string;
}[];
/**
 * Список кастомных ошибок для различных ситуаций.
 */
export declare const PLUGIN_ERRORS: Readonly<{
    'CBP-0': "Неизвестная ошибка при работе с КриптоПро ЭЦП Browser plug-in.";
    'CBP-1': "Не удалось инициализировать КриптоПро ЭЦП Browser plug-in.";
    'CBP-2': "Ошибка инициализации библиотеки для работы с КриптоПро ЭЦП Browser plug-in.";
    'CBP-3': "Используется устаревшая версия КриптоПро ЭЦП Browser Plug-in. Необходимо провести обновление до последней доступной версии.";
    'CBP-4': "Используется устаревшая версия КриптоПро CSP. Необходимо провести обновление до версии 4.0 и выше.";
    'CBP-5': "Ошибка формата данных.";
    'CBP-6': "Сертификат не прошёл проверку, использование невозможно.";
    'CBP-7': "Неверные входные параметры.";
    'CBP-8': "Не установлен ни один криптопровайдер.";
    'CBP-9': "Неизвестный алгоритм ключа.";
    'CBP-10': "Не удалось прочитать данные сертификата.";
    'CBP-11': "Потеряно соединение с КриптоПро ЭЦП Browser plug-in.";
}>;
/**
 * Список текстов ошибок у котороых нет кода ошибок.
 */
export declare const ERRORS_WITHOUT_CODE: Readonly<{
    'Lost connection to extension': "CBP-11";
}>;
