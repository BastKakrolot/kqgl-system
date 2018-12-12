import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpclientBaseService {

  constructor() { }

  param(obj): string {
    let query = '', name, value, fullSubName, subName, subValue, innerObj, i;

    // tslint:disable-next-line:forin
    for (name in obj) {
      value = obj[name];

      if (value instanceof Array) {
        for (i = 0; i < value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += this.param(innerObj) + '&';
        }
      } else if (value instanceof Object) {
        // tslint:disable-next-line:forin
        for (subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += this.param(innerObj) + '&';
        }
      } else if (value !== undefined && value !== null) {
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
      }
    }
    return query.length ? query.substr(0, query.length - 1) : query;
  }
  /**
   * @description 将JSON对象解析为url参数（用于POST后台提交）
   * @method paramObject
   * @param {Object} 要解析的JSON对象
   * @return {String} 解析好的url参数
   */
  paramObject(obj) {
    if (obj == null) {
        return '';
    }
    var query = '';
    var name;
    var value;
    var fullSubName;
    var subName;
    var subValue;
    var innerObj;
    var i;
    var strTempQuery;

    for (name in obj) {
      value = obj[name];

      if (value instanceof Array) {
        for (i = 0; i < value.length; ++i) {
          subValue = value[i];
          if (subValue instanceof Object) {
            fullSubName = name + '[' + i + ']';
          } else {
            fullSubName = name;
          }
          innerObj = {};
          innerObj[fullSubName] = subValue;
          strTempQuery = this.paramObject(innerObj);
          if (!this.isStrNullOrEmpty(strTempQuery)) {
            query += strTempQuery + '&';
          }
        }
      } else if (value instanceof Object) {
        for (subName in value) {
          subValue = value[subName];
          fullSubName = name + '.' + subName;
          //fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          strTempQuery = this.paramObject(innerObj);
          if (!this.isStrNullOrEmpty(strTempQuery)) {
            query += strTempQuery + '&';
          }
        }
      } else if (value !== undefined && value !== null) { query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&'; }
    }
    return query.length ? query.substr(0, query.length - 1) : query;
  }
  /**
   * @description 判断字符串是否为空
   * @method isStrNullOrEmpty
   * @param {String} str 字符串
   * @return {Boolean} 是否为空
   */
  isStrNullOrEmpty(str: String): boolean {
    if (str == null) {
      return true;
    }
    if (!this.isString(str)) {
      return false;
    }
    var bEmpty = true;
    var pTempStr = this.trimStr(str);
    for (var ii = 0; ii < pTempStr.length; ii++) {
      var pTempChar = pTempStr[ii];
      if (pTempChar !== ' ' && pTempChar !== '↵') {
          bEmpty = false;
          break;
      }
    }
    return bEmpty;
  }
  /**
   * @description 去除字符串的前后空格，包含回车字符
   * @method trimStr
   * @param {String} str 字符串
   * @return {String} 处理后的字符串
   */
  trimStr(str): string {
    if (str == null || !this.isString(str)) {
      return str;
    }

    var pTempStr = str.replace(/(^\r\n*)|(\r\n*$)/g, '');
    pTempStr = pTempStr.replace(/(^\n*)|(\n*$)/g, '');
    pTempStr = pTempStr.replace(/(^\s*)|(\s*$)/g, '');
    pTempStr = pTempStr.replace(/(^\r*)|(\r*$)/g, '');
    return pTempStr;
  }
  /**
   * @description 判断参数是否为字符串
   * @method isString
   * @param {Object} obj
   * @return {Boolean} 是否为字符串
   */
  isString(obj: object): boolean {
    if (obj == null) {
      return false;
    }
    return Object.prototype.toString.call(obj) === '[object String]';
  }
}
