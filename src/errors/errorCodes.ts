/**
 * Список возможных ошибок при работе с API CryptoPro Browser Plugin.
 * Это ошибки могут быть как от криптопровайдера (CSP), так и от операционной системы пользователя.
 * Часть ошибок описана тут @see https://docs.cryptopro.ru/pki/introduction/dllerrors
 * @type {{code: string, message: string}[]}
 */
export const CRYPTO_PRO_ERRORS = Object.freeze([
  {
    code: '0x80090008',
    message:
      'Указан неверный алгоритм. Операционная система не смогла выполнить операцию, так как криптопровайдер не установлен или установлен некорректно. Для устранения ошибки рекомендуется переустановить сертификат и проверить привязку к закрытому ключу, если не поможет, то переустановить криптопровайдер.',
    // original: 'Код ошибки: 0x80090008 (Указан неверный алгоритм)'
  },
  {
    code: '0x80090017',
    message:
      'Криптопровайдер не установлен или установлен некорректно. Для устранения ошибки рекомендуется переустановить криптопровайдер.',
  },
  {
    code: '0x8007064A',
    message:
      'Возможно криптопровайдер КриптоПро частично удален с рабочего места или установлена устаревшая версия. Для устранения ошибки рекомендуется установить версию КриптоПро 4.0 и выше.',
    // original: 'Ошибка КриптоПро CSP Загрузка информации о лицензии Код ошибки: 0x8007064A (Данные настройки для этого продукта повреждены. Обратитесь в службу поддержки организации)'
  },
  {
    code: '0x80090019',
    message:
      'Набор ключей не определен. Проверьте на корректность сертификат и убедитесь что на машине установлен необходимый для него криптопровайдер.',
    // original: 'Код ошибки: 0x80090019 (Набор ключей не определен.)'
    // возникает так же если не установлен на компе криптопро
  },
  {
    code: '0x8007139F',
    message:
      'Внутренняя ошибка КриптоПро. Группа или ресурс не находятся в нужном состоянии для выполнения требуемой операции. Вероятно не работает TSP сервер (служба штампов времени).',
  },
  {
    code: '0x80070002',
    message:
      'Внутренняя ошибка КриптоПро. Если вы подписываете с помощью усовершенствованной подписи, убедитесь что ваши версии TSP client и OCSP client имеют неограниченную лицензию.',
  },
  {
    code: '0xc2110128',
    message:
      'Внутренняя ошибка КриптоПро. Не удалось получить статус отзыва ЭП. Попробуйте повторить операцию позднее.',
  },
  {
    code: '0xC2100121',
    message:
      'Внутренняя ошибка КриптоПро. Не задан адрес службы штампов времени.',
  },
  {
    code: '0xC2110121',
    message: 'Внутренняя ошибка КриптоПро. Не задан адрес службы OCSP.',
  },
  {
    code: '0x80090020',
    message:
      'Внутренняя ошибка КриптоПро. Убедитесь, что на машине установлен только один криптопровайдер во избежание конфликтов ПО.',
  },
  {
    code: '0x800B010A',
    message:
      'Не установлен корневой сертификат. Произведите установку корневого сертификата Удостоверяющего Центра, выдавшего вашу электронную подпись.',
  },
  {
    code: '0x800B0109',
    message:
      'Не установлен корневой сертификат. Произведите установку корневого сертификата Удостоверяющего Центра, выдавшего вашу электронную подпись.',
  },
  {
    code: '0x8007065B',
    message: 'Истекла лицензия КриптоПро CSP',
  },
  {
    code: '0x80092004',
    message:
      'Не установлена связь с закрытым ключом, привяжите личный сертификат к закрытому ключу.',
  },
  {
    code: '0x8009200B',
    message: 'Закрытый ключ не найден.',
  },
  {
    code: '0x8000FFFF', // обычно если USB токен не вставлен
    message: 'Закрытый ключ не найден.',
    // original: 'Код ошибки: 0x8000FFFF (Не удалось создать подпись из-за ошибки: Internal error)'
  },
  {
    code: '0x80090016',
    message: 'Закрытый ключ не найден.',
    // original: 'Код ошибки: 0x80090016 (Набор ключей не существует)'
  },
  {
    code: '0x8009000D',
    message:
      'Ключ не существует. Для устранения ошибки рекомендуемся переустановить сертификат с повторной привязкой к закрытому ключу.',
    // original: 'Код ошибки: 0x8009000D (Ключ не существует.)'
  },
  {
    code: '0x8009200C',
    message:
      'Не удалось найти закрытый ключ для расшифровки зашифрованного документа.',
  },
  {
    code: '0xC2110126',
    message: 'Сертификат отозван.',
  },
  {
    code: '0x000004C7',
    message:
      'Операция отменена пользователем. Необходимо обновить страницу и предоставить доступ к криптопровайдеру.',
  },
  {
    code: '0x800704C7',
    message: 'Операция отменена пользователем.',
  },
  {
    code: '0x8010006E',
    message: 'Операция отменена пользователем.',
  },
  {
    code: '0x800705B9',
    message: 'Ошибка разбора XML файла. Документ имеет некорректный формат.',
    // original: '0x800705B9: Windows was unable to parse the requested XML data. (0x800705B9)'
  },
  {
    code: '0x80090010',
    message: 'Срок действия требуемого сертификата истёк или ещё не наступил.',
    // original: 'Отказано в доступе. (0x80090010)'
  },
  {
    code: '0x800B0101',
    message: 'Срок действия требуемого сертификата истёк или ещё не наступил.',
    // original: 'Истек/не наступил срок действия требуемого сертификата при проверке по системным часам или по отметке времени в подписанном файле. (0x800B0101)'
  },
  {
    code: '0x8010006C',
    message:
      'Доступ к сертификату заблокирован, так как исчерпано число попыток ввести правильный PIN-код.',
    // original: 'The card cannot be accessed because the maximum number of PIN entry attempts has been reached. (0x8010006C)'
  },
]);

/**
 * Список кастомных ошибок для различных ситуаций.
 */
export const PLUGIN_ERRORS = Object.freeze({
  'CBP-0': 'Неизвестная ошибка при работе с КриптоПро ЭЦП Browser plug-in.',
  'CBP-1': 'Не удалось инициализировать КриптоПро ЭЦП Browser plug-in.',
  'CBP-2':
    'Ошибка инициализации библиотеки для работы с КриптоПро ЭЦП Browser plug-in.',
  'CBP-3':
    'Используется устаревшая версия КриптоПро ЭЦП Browser Plug-in. Необходимо провести обновление до последней доступной версии.',
  'CBP-4':
    'Используется устаревшая версия КриптоПро CSP. Необходимо провести обновление до версии 4.0 и выше.',
  'CBP-5': 'Ошибка формата данных.',
  'CBP-6': 'Сертификат не прошёл проверку, использование невозможно.',
  'CBP-7': 'Неверные входные параметры.',
  'CBP-8': 'Не установлен ни один криптопровайдер.',
  'CBP-9': 'Неизвестный алгоритм ключа.',
  'CBP-10': 'Не удалось прочитать данные сертификата.',
  'CBP-11': 'Потеряно соединение с КриптоПро ЭЦП Browser plug-in.',
  'CBP-12': 'Ошибка формирования контейнера закрытого ключа',
  'CBP-13': 'Ошибка формирования запроса на выпуск сертификата',
});

/**
 * Список текстов ошибок у котороых нет кода ошибок.
 */
export const ERRORS_WITHOUT_CODE = Object.freeze({
  'Lost connection to extension': 'CBP-11',
});
