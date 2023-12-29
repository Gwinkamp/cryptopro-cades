import type { ICryptoError, IErrorObject } from '../types';
import { PLUGIN_ERRORS } from './errorCodes';
/**
 * Описывает ошибку криптографического модуля.
 *
 *  @example
 *  try{...}
 *  catch(err){
 *    throw CryptoError.createCadesError(err, "Ошибка инициализации контейнера")
 *  }
 *
 * @class feature/crypto/CryptoError
 * @extends Error
 */
export declare class CryptoError extends Error implements ICryptoError {
    /**
     * Правило для выяснения типа ошибки (источника ошибки).
     */
    private static _RULE_MATCHING_CODE;
    /**
     * Код ошибки. Максимальная длина 16 символов.
     * Для идентификации также смотрите @see #title @see #type.
     */
    code: string;
    /**
     * Название ошибки (Основной/короткий текст ошибки).
     * По нему можно идентифицировать ошибку для изменения #message согласно
     *  требованиям системы.
     */
    title: string;
    /**
     * Текст сообщения об ошибке. Для пользователя.
     */
    message: string;
    /**
     * Тип ошибки (обычный - Error, от CAdESCOM plugin - CAdES,...)
     */
    type: string;
    /**
     * Унаследовано от родительского класса Error.
     */
    name: string;
    /**
     * Приватный конструктор. Для создания экземпляра используйте статические методы @createCadesError и @create
     * @param err Объект ошибки.
     */
    private constructor();
    /**
     * Формирует текстовое представление ошибки в формате Код ошибки: Сообщение для пользователя
     * @returns
     */
    toString(): string;
    /**
     * Создает ошибку на основе ошибки от CryptoPro Browser Plugin.
     * @param err Объект ошибки.
     * @param title Описание ошибки (не показывается пользователю)
     * @returns {CryptoError} Объект ошибки криптографического модуля.
     */
    static createCadesError(err: IErrorObject, title: string): CryptoError;
    /**
     * Создает формализованную ошибку криптографического модуля с указанным кодом ошибки.
     * @param errorCode Объект ошибки.
     * @param title Описание ошибки (не показывается пользователю).
     * @param err Объект ошибки.
     * @param overrideMessage Текст ошибки который будет указан вместо стандартного из справочника.
     * @returns {CryptoError} Объект ошибки криптографического модуля.
     */
    static create(errorCode: keyof typeof PLUGIN_ERRORS, title: string, err: IErrorObject | null, overrideMessage?: string): CryptoError;
    /**
     * Извлекаем код ошибки плагина (если это ошибка крипты).
     * @param {Error} err - объект ошибки.
     * @returns {number|string} .
     * @private
     */
    private static _extractCode;
    /**
     * Выдираем из объекта Ошибки сообщение.
     * @param {string|Error} err - объект ошибки, откуда вытащить собщение.
     * @returns {*|string} .
     * @private
     */
    private _extractMessage;
}
