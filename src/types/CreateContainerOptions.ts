/**
 * Параметры для генерации контейнера закрытого ключа.
 */
export type CreateContainerOptions = {
  /** Наименование контейнера */
  containerName?: string;

  /** Пароль от контейнера */
  pin?: string;

  /** Признак того, что контейнер можно экспортировать */
  allowExport?: boolean;
};
