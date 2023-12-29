var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { getLastError } from '../api/getLastError';
import { CRYPTO_PRO_ERRORS, ERRORS_WITHOUT_CODE, PLUGIN_ERRORS, } from './errorCodes';
import PluginConfig from './../PluginConfig';
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
var CryptoError = /** @class */ (function (_super) {
    __extends(CryptoError, _super);
    /**
     * Приватный конструктор. Для создания экземпляра используйте статические методы @createCadesError и @create
     * @param err Объект ошибки.
     */
    function CryptoError(err) {
        var _this = _super.call(this, err === null || err === void 0 ? void 0 : err.message) || this;
        /**
         * Код ошибки. Максимальная длина 16 символов.
         * Для идентификации также смотрите @see #title @see #type.
         */
        _this.code = '';
        /**
         * Название ошибки (Основной/короткий текст ошибки).
         * По нему можно идентифицировать ошибку для изменения #message согласно
         *  требованиям системы.
         */
        _this.title = '';
        /**
         * Текст сообщения об ошибке. Для пользователя.
         */
        _this.message = '';
        /**
         * Тип ошибки (обычный - Error, от CAdESCOM plugin - CAdES,...)
         */
        _this.type = 'Error';
        /**
         * Унаследовано от родительского класса Error.
         */
        _this.name = '';
        _this.cause = err;
        _this.message = err === null || err === void 0 ? void 0 : err.message;
        Object.setPrototypeOf(_this, CryptoError.prototype);
        return _this;
    }
    /**
     * Формирует текстовое представление ошибки в формате Код ошибки: Сообщение для пользователя
     * @returns
     */
    CryptoError.prototype.toString = function () {
        return [this.code, this.message].filter(Boolean).join(': ');
    };
    /**
     * Создает ошибку на основе ошибки от CryptoPro Browser Plugin.
     * @param err Объект ошибки.
     * @param title Описание ошибки (не показывается пользователю)
     * @returns {CryptoError} Объект ошибки криптографического модуля.
     */
    CryptoError.createCadesError = function (err, title) {
        var _a, _b, _c, _d, _e, _f, _g;
        var cryptoError = new CryptoError(err);
        err = err;
        var errCode = ERRORS_WITHOUT_CODE[err.message];
        if (errCode) {
            err.code = errCode;
        }
        cryptoError.code = (_a = err.code) !== null && _a !== void 0 ? _a : CryptoError._extractCode(err);
        if (typeof cryptoError.code === 'string' && cryptoError.code.length > 16) {
            cryptoError.code = '';
        }
        var extractedMsg = '';
        if (err.message) {
            extractedMsg = cryptoError._extractMessage(err);
        }
        cryptoError.title = (_b = title !== null && title !== void 0 ? title : err.message) !== null && _b !== void 0 ? _b : extractedMsg;
        cryptoError.type = (_c = err.type) !== null && _c !== void 0 ? _c : 'CAdES';
        cryptoError.type += ' < @astral/cades-plugin';
        cryptoError.message =
            (_g = (_f = (_e = (_d = CRYPTO_PRO_ERRORS.find(function (res) { return res.code == cryptoError.code; })) === null || _d === void 0 ? void 0 : _d.message) !== null && _e !== void 0 ? _e : PLUGIN_ERRORS[cryptoError.code]) !== null && _f !== void 0 ? _f : extractedMsg) !== null && _g !== void 0 ? _g : err.message;
        PluginConfig.notifyError(cryptoError);
        return cryptoError;
    };
    /**
     * Создает формализованную ошибку криптографического модуля с указанным кодом ошибки.
     * @param errorCode Объект ошибки.
     * @param title Описание ошибки (не показывается пользователю).
     * @param err Объект ошибки.
     * @param overrideMessage Текст ошибки который будет указан вместо стандартного из справочника.
     * @returns {CryptoError} Объект ошибки криптографического модуля.
     */
    CryptoError.create = function (errorCode, title, err, overrideMessage) {
        var cryptoError = new CryptoError(err);
        cryptoError.type = 'Error';
        cryptoError.code = errorCode;
        cryptoError.title = title; // не показываем пользователю
        cryptoError.message = overrideMessage !== null && overrideMessage !== void 0 ? overrideMessage : PLUGIN_ERRORS[cryptoError.code];
        PluginConfig.notifyError(cryptoError);
        return cryptoError;
    };
    /**
     * Извлекаем код ошибки плагина (если это ошибка крипты).
     * @param {Error} err - объект ошибки.
     * @returns {number|string} .
     * @private
     */
    CryptoError._extractCode = function (err) {
        var _a, _b;
        var result = (((_a = err.message) === null || _a === void 0 ? void 0 : _a.match(/\(?0x.{2,8}\)?/)) ||
            ((_b = err.message) === null || _b === void 0 ? void 0 : _b.match(CryptoError._RULE_MATCHING_CODE)) ||
            [])[0] || '';
        return result.replace(/[()]/g, '').trim();
    };
    /**
     * Выдираем из объекта Ошибки сообщение.
     * @param {string|Error} err - объект ошибки, откуда вытащить собщение.
     * @returns {*|string} .
     * @private
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CryptoError.prototype._extractMessage = function (err) {
        var fullErrorData = getLastError(err);
        return ((fullErrorData === null || fullErrorData === void 0 ? void 0 : fullErrorData.message) || err.message || '')
            .replace("(".concat(this.code, ")"), '')
            .trim();
    };
    /**
     * Правило для выяснения типа ошибки (источника ошибки).
     */
    CryptoError._RULE_MATCHING_CODE = /^(.*?)(?:(?:\.?\s?\(?0x)|(?:\.?$))/;
    return CryptoError;
}(Error));
export { CryptoError };
