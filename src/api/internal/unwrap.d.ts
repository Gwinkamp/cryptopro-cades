import type { WithOptionalPromise } from '../../types';
/**
 * Функция убирающая обёртку WithOptionalPromise<T> при необходимости.
 * @param optionalPromise Тип с опциональным промисом.
 * @returns {Promise<T>} Промис возвращающий реальное значение.
 */
export declare function unwrap<T>(optionalPromise: WithOptionalPromise<T>): Promise<T>;
