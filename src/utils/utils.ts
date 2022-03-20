import moment from 'moment';
import { PlatformUtils } from './platform';
class Utils {
  /**
   * 判断奇数偶数
   * @param num 需要判断的数
   * @returns boolean
   */
  static JudgeParity(num: number) {
    return num % 2 == 0 ? 0 : 1;
  }

  /**
   * 判断对象是否为空
   * @param obj 传入对象
   * @returns boolean
   */
  static isEmptyObj(obj: any) {
    return JSON.stringify(obj) != '{}' ? true : false;
  }

  static isIndexOutbound(idx: number, array: any[]) {
    if (idx < 0 || idx > array.length - 1) {
      throw '数组越界';
    }
    return false;
  }

  static initValue(arg: any) {
    let dataType = Object.prototype.toString.call(arg);
    switch (dataType) {
      case '[object Boolean]':
        return false;
      case '[object String]':
        return '';
      case '[object Array]':
        return [];
      case '[object Number]':
        return 0;
      default:
        throw 'unsupport data type';
    }
  }

  static returnKeyType() {
    return PlatformUtils.getPlatform() == 'ios' ? 'done' : 'previous';
  }

  static formatDate(utcDate: string) {
    // 处理时间转换问题
    let date = new Date(utcDate);
    date.setHours(date.getHours() - 8);
    return moment(date).format('YYYY-MM-DD HH:mm');
  }
}

export { Utils };
