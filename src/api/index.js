import Service from './service'
import {
  Toast,
  Alert,
} from 'vux';

class API {
  constructor() {
    this.service = new Service()
  }

  /***********************版本信息管理******************************/
  //获取版本信息
  get versionInfo() {
    try {
      let info = JSON.parse(localStorage['ZP-WEB-C-VERSION-INFO'])
      return info
    } catch (ex) {
      localStorage.removeItem('ZP-WEB-C-VERSION-INFO')
      return null
    }
  }
  //设置版本信息
  set versionInfo(value) {
    localStorage['ZP-WEB-C-VERSION-INFO'] = JSON.stringify(value)
  }
  //检查版本方法
  checkVersion() {
    return new Promise((resolve, reject) => {

      this.service.getConfig().then(data => {
        if (this.versionInfo) {
          if (data.version != this.versionInfo.version) {
            this.versionInfo = data
            resolve()
          }
        } else {
          this.versionInfo = data
          resolve()
        }

        reject();
      })

    })
  }

  /*****************方法***********************/
  /**
   * 复制数组对象，仅对不含方法的对象有效
   * @param {数组对象} arrObj 
   */
  copy(arrObj) {
    return JSON.parse(JSON.stringify(arrObj))
  }

  /**
   * 去掉前后空格
   * @param {Any} args - 一般传数组或对象
   */
  trim(args) {
    //如果是数组
    if (Array.isArray(args)) {
      args.forEach((ele, index) => {
        if (Array.isArray(ele) || typeof ele === 'object') {
          this.trim(ele)
        } else if (typeof ele === 'string') {
          args[index] = ele.trim()
        }
      })
    } else if (args != null && typeof args === 'object') {
      Object.keys(args).forEach(k => {
        let ele = args[k]
        if (Array.isArray(ele) || typeof ele === 'object') {
          this.trim(ele)
        } else if (typeof ele === 'string') {
          args[k] = ele.trim()
        }
      })
    } else if (typeof args === 'string') {
      return args.trim()
    }
  }

  /**
   * 严格检测是否json对象
   * @param {要检测的对象} obj 
   */
  isJson(obj) {
    return typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
  }

  /**
   * 加载中
   * @param {提示信息} text
   */
  loading(text) {
    return Indicator.open(text || 'Loading...');
  }

  /**
   * 通知
   * @param {提示信息} msg 
   * @param {Message默认参数} options 
   */
  toast(msg, type, options = {}) {
    return Toast({
      message: msg,
      type: type || "text",
      ...options
    });
  }

  /**
   * 消息提示
   * @param {提示信息} msg 
   * @param {Confirm默认参数} options 
   */
  alert(msg, options, title = "提示") {
    return Alert(msg, title, {
      confirmButtonText: '确定',
      ...options
    })
  }

  /**
   * 确认消息
   * @param {提示信息} msg 
   * @param {Confirm默认参数} options 
   */
  confirm(msg, options = {}, title = "提示") {
    return MessageBox.confirm(msg, title, {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
      ...options
    })
  }

  /**
   * 提交内容
   * @param {提示信息} msg 
   * @param {Confirm默认参数} options 
   */
  prompt(msg, options = {}, title = "提示") {
    return MessageBox.prompt(msg, title, {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      ...options
    })
  }


  /**
   * 获取cookie值
   * @param {cookie名称} key 
   */
  getCookie(key) {
    var str = "(^| )" + key + "=([^;]+)(;|$)";
    var reg = new RegExp(str);
    var arr = document.cookie.match(reg);
    if (!arr) return null;
    return arr[2];
  }

  /**
   * 设置cookie值
   * @param {名称} name 
   * @param {值} value 
   * @param {过期天数} day 
   */
  setCookie(name, value, day) {
    var d = new Date();
    d.setTime(d.getTime() + (day * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
  }

  /**
   * 删除cookie
   * @param {名称} name 
   */
  delCookie(name) {
    this.setCookie(name, '', -1)
  }

  /**
   * 阻止body滑动
   * @param {Boolean} isPrevent - 是否阻止body滑动
   */
  preventBodyTouchMove(isPrevent = true) {
    let body = document.querySelector("body")
    //如果定义了事件，并且需要允许body滑动
    if (body._TMP_handlerTouchMove && isPrevent == false) {
      body.removeEventListener("touchmove", body._TMP_handlerTouchMove)
      body._TMP_handlerTouchMove = null
    } else {
      //如果阻止body滑动
      if (isPrevent) {
        body._TMP_handlerTouchMove = function (event) {
          if (event.preventDefault) event.preventDefault();
          if (event.returnValue) event.returnValue = false;
        }
        body.addEventListener("touchmove", body._TMP_handlerTouchMove, {
          passive: false
        })
      }
    }

  }
}

export default {
  install(Vue, options) {
    Vue.prototype.api = new API()
  }
}
