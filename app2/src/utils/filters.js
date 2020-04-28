import { isDef, isArray, isPlainObject, isUndef, isEmptyArray, isEmptyObject, isEmptyString } from './base';
// 过滤对象中无效的值  例如undefined null '' [] {}
export function filterInvalidValue(obj) {
    if (!isPlainObject(obj)) { return obj; }

    obj = Object.assign({}, obj);
    for (let key in obj) {
        let value = obj[key];
        if (
            isUndef(value) ||
            isEmptyArray(value) ||
            isEmptyObject(value) ||
            isEmptyString(value)
        ) {
            delete obj[key];
        }
    }

    return obj;
}