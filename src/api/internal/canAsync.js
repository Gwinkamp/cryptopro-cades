/**
 * Проверка доступности асинхронной функциональности.
 * @returns {boolean} true, если нужно выполнять асинхронно.
 */
export function canAsync() {
    var _a;
    // !!window.Promise || !!Iterator
    return !!((_a = window.cadesplugin) === null || _a === void 0 ? void 0 : _a.CreateObjectAsync);
}
