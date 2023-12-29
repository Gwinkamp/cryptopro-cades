/**
 * Конвертировать массив байт в строкове 16-ричное представление.
 * @param buffer массив байт.
 * @returns строка в 16-ричном представлении.
 */
export function bufferToHex(buffer) {
    if (!buffer) {
        return null;
    }
    var result = '';
    var int8Buffer = new Uint8Array(buffer);
    for (var i = 0; i < int8Buffer.length; i++) {
        var str = int8Buffer[i].toString(16).toUpperCase();
        result += (str.length === 1 ? '0' : '') + str;
    }
    return result.trim();
}
