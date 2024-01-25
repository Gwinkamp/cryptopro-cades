import type { WithOptionalPromise } from '../WithOptionalPromise';

/**
 * Объект закрытого ключа.
 * @see https://docs.cryptopro.ru/cades/plugin/certenroll/cx509privatekey
 */
export type CX509PrivateKey = {
  /**
   * Имя контейнера закрытого ключа.
   */
  readonly ContainerName: WithOptionalPromise<string>;

  /**
   * Позволяет указать, существует ли закрытый ключ в контейнере или его необходимо создать. Значение True означает, что ключ существует.
   */
  readonly Existing: WithOptionalPromise<boolean>;

  /**
   * Имя криптопровайдера.
   */
  readonly ProviderName: WithOptionalPromise<string>;

  /**
   * Уникальное имя контейнера.
   */
  readonly UniqueContainerName: WithOptionalPromise<string>;

  // тут есть еще много других методов и свойств. см по ссылке выше
};
