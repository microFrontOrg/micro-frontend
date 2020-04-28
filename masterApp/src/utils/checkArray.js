/*
 * @Description: 存放组件中常用的校验封装的函数
 * @Author: 郭军伟
 * @Date: 2020-03-09 15:18:27
 * @lastEditTime: Do not edit
 */

import { isUndef, isArray, isEmptyString } from './base';

/**
* @description 校验一个数组的某些字段是否必填
* @param {Array[Object]} array 要校验的数组
* @param {Array} fieldArray 要校验的字段数组,不填写，表示校验所有字段
* @return {Boolean} true 校验通过 false 校验未通过
*/
export function checkArray(array, fieldArray) {
  if (!isArray(array)) return false;
  fieldArray = fieldArray || Object.keys[array[0]];
  return array.every(item => {
    let flag = true;
    for (let i = 0; i < fieldArray.length; i++) {
      let val = item[fieldArray[i]];
      if (isUndef(val) || isEmptyString(val)) {
        flag = false;
        break;
      };
    }

    return flag
  })
}


/**
 * @description 判断两个数组是否存在相同的对象 根据对象中的字段值进行判断
 * @param {Array} arr1 第一个数组
 * @param {*} arr2 第二个数组
 * @param {*} field 判断的字段
 * @return flag: undefined 参数不符合规则  true 存在相同对象  false不存在相同对象
 */
export function isExistSameObject(arr1, arr2, field) {
  if (!isArray(arr1) || !isArray(arr2) || isUndef(field)) return;
  let flag = false;
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.findIndex(item => item[field] === arr1[field]);
    if (index >= 0) {
      flag = true;
      break;
    };
  }
  return flag;
}

/**
 * @description 判断两个数组中是否存在相同的值
 * @param {Array} arr1 第一个数组
 * @param {*} arr2 第二个数组
 * @return flag: undefined 参数不符合规则  true 存在相同值 false不存在相同值
 */
export function isExistSameValue(arr1, arr2) {
  if (!isArray(arr1) || !isArray(arr2)) return;
  let flag = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      flag = true;
      break;
    }
  }

  return flag;
}

/**
 * @description 判断父数组是否包含子数组中的所有元素
 * @param {Array} parentArray 父数组
 * @param {Array} subArray 子数组
 * @return {Boolean} flag undefined 参数不符合规则 true表示包含所有  flag不包含所有
 */
export function isSubArray(parentArray, subArray) {
  if (!isArray(parentArray) || !isArray(subArray)) return;
  let flag = true;
  for (let i = 0; i < subArray.length; i++) {
    if (parentArray.indexOf(subArray[i]) < 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

/**
 * @description 判断一个数组区间是否是另一个数组区间的子区间
 * @param {Array} parentInterval 
 * @param {Array} subInterval 
 */
export function isSubInterval(parentInterval, subInterval) {
  if (
    !isArray(parentInterval) ||
    !isArray(subInterval) ||
    parentInterval.length !== 2 ||
    subInterval.length !== 2
  ) {
    return false;
  }

  return subInterval[0] >= parentInterval[0] && subInterval[1] <= parentInterval[1]

}

/**
 * @description 校验二维数组的区间是否有交叉
 * @param {Array} array 被校验的数组
 * @return Boolean true校验通过 无交叉  false 校验未通过  无交叉 undefined 参数格式不正确
 */
export function checkTwoDimensionalArrayOverlapping(array) {
  if (!isArray(array)) { return; }
  if (array.length <= 1) { return true; }
  let min = 0, max = 0, intervalArray = [];

  for (let i = 0; i < array.length; i++) {
    let itemArray = array[i];
    if (!isArray(itemArray) || itemArray.length !== 2) {
      return;
    }

    if (i === 0) {
      min = itemArray[0];
      max = itemArray[1];
      continue;
    }

    if (itemArray[1] <= min || itemArray[0] >= max || intervalArray.some(item => isSubInterval(item, itemArray))) {
      // 满足条件
      if (itemArray[1] <= min) {
        // 在左边界外
        intervalArray.push([itemArray[1], min]);
        min = itemArray[0];
      } else if (itemArray[0] >= max) {
        // 在右边界外
        intervalArray.push([max, itemArray[0]]);
        max = itemArray[1];
      } else {
        // 在可取区间内
        for (let k = 0; k < intervalArray.length; k++) {
          if (isSubInterval(intervalArray[k], itemArray)) {
            intervalArray.splice(k, 1, [intervalArray[k][0], itemArray[0]], [itemArray[1], intervalArray[k][1]]);
            break;
          }
        }
      }
    } else {
      return false;
    }

  }

  return true;
}
