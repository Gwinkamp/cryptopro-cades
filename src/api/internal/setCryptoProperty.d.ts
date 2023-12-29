/**
 * описываем структуру параметр OBJ функции ниже.
 * интерфейс ради интерфейса >_<
 */
interface ICryptoObject {
    [key: string]: any;
}
/**
 * Устанавливаем значение в указанное свойство переданного объекта.
 * @param {object} obj - объект-цель.
 * @param {string} key - имя свойства.
 * @param {*} value - значение для свойства.
 * @returns {void} .
 */
export declare function setCryptoProperty(obj: ICryptoObject, key: string, value: any): Promise<void>;
export {};
