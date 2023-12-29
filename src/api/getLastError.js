/**
 * Возвращает строку с описанием ошибки из исключения, порождённого плагином.
 * Для Firefox данный метод является единственным способом получения кода ошибки и её текстового описания от плагина.
 * @param {Error} error - ошибка, по которой нужно получить информацию.
 * @returns {Error | undefined} объект ошибки, если имеется.
 */
export function getLastError(error) {
    var _a;
    return (_a = window.cadesplugin) === null || _a === void 0 ? void 0 : _a.getLastError(error);
}
