import type { WithOptionalPromise } from '../WithOptionalPromise';

/**
 * Объект, описывающий имя субъекта в соответствии с x.500 DistinguishedName.
 * @see https://docs.cryptopro.ru/cades/plugin/certenroll/cx500distinguishedname
 */
export interface ICX500DistinguishedName {
  /**
   * Инициализирует объект по строке с именем субъекта.
   * @param value строка с именем субъекта
   */
  Encode(value: string): WithOptionalPromise<void>;
}
