import { canAsync } from './canAsync';
/**
 * Функция убирающая обёртку WithOptionalPromise<T> при необходимости.
 * @param optionalPromise Тип с опциональным промисом.
 * @returns {Promise<T>} Промис возвращающий реальное значение.
 */
export function unwrap(optionalPromise) {
    if (canAsync() && optionalPromise instanceof Promise) {
        return optionalPromise;
    }
    else {
        return Promise.resolve(optionalPromise);
    }
}
