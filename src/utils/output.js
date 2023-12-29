import PluginConfig from '../PluginConfig';
/**
 * Подготовить данные для логирования.
 * @param args данные.
 * @returns Объект готовый для логирования.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var prepareArgs = function (args) {
    var context = '[cryptopro-cades]: ';
    if (typeof args[0] == 'string') {
        args[0] = context + args[0];
    }
    else {
        args.unshift(context);
    }
    return args;
};
/**
 * Логировать информацию (если включен Debug)
 * @param args
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export var outputDebug = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (PluginConfig.Debug) {
        var data = prepareArgs(args);
        if (typeof data[0] == 'string') {
            console.log(data[0], data.slice(1, data.length));
        }
        else {
            console.log(data);
        }
    }
};
/**
 * Логировать ошибку.
 * @param args параметры.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export var outputError = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var data = prepareArgs(args);
    if (typeof data[0] == 'string') {
        console.error(data[0], data.slice(1, data.length));
    }
    else {
        console.error(data);
    }
};
