import type { IAnyError, ICryptoError } from '../types';
/**
 * Возвращает строку с описанием ошибки из исключения, порождённого плагином.
 * Для Firefox данный метод является единственным способом получения кода ошибки и её текстового описания от плагина.
 * @param {Error} error - ошибка, по которой нужно получить информацию.
 * @returns {Error | undefined} объект ошибки, если имеется.
 */
export declare function getLastError(error: ICryptoError | Error | IAnyError): Error | undefined;
