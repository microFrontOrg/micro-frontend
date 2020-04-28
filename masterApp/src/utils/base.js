const _toString = Object.prototype.toString;

export function isDef(val) {
    return val !== undefined && val !== null;
}

export function isUndef(val) {
    return val === undefined || val === null;
}

export function isString(str) {
    return _toString.call(str) === '[object String]';
}

export function isArray(arr) {
    return _toString.call(arr) === '[object Array]';
}

export function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

export function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
}

export function isFunction(fn) {
    return typeof fn === 'function';
}

export function isNotSpaceString(str) {
    return isString(str) && str !== '';
}

export function isEmptyString(str) {
    return isString(str) && str === '';
}

export function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
}

export function isEmptyObject(obj) {
    return isPlainObject(obj) && Object.keys(obj).length === 0;
}
