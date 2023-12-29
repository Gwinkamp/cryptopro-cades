/**
 * В данный момент имеется версия не меньше указанной версия CAdESCOM Плагина.
 * @param {string} version полная версия Плагина для сверки.
 * @returns {boolean} .
 */
export function isSupportedCadesVersion(version) {
    var match = version.match(/(\d+)\.(\d+)\.(\d+)/);
    if (!match) {
        return false;
    }
    var major = match[1], minor = match[2], patch = match[3];
    // @ts-ignore
    major = parseInt(major);
    // @ts-ignore
    minor = parseInt(minor);
    // @ts-ignore
    patch = parseInt(patch);
    return (
    // @ts-ignore
    major > 2 ||
        !(parseInt(major) === 2 && parseInt(minor) === 0 && parseInt(patch) < 13292));
}
