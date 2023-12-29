/**
 * Обёртка для подготовки плагина перед вызовом функциональности.
 * @param {Function|Promise} cb - функция обратного вызова.
 * @returns {Promise} .функция ожидания.
 */
export declare function afterPluginLoaded(cb: Function, checkSystem?: boolean): (...args: any) => Promise<any>;
