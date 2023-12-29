import type { ISystemInfo } from '../types';
/**
 * Предоставляет информацию о системе.
 *
 * @returns информацию о CSP и плагине.
 */
export declare const getSystemInfo: () => Promise<ISystemInfo>;
