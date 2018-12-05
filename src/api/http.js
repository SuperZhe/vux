import axios from 'axios'
import qs from 'qs';
import router from '../router';
import {
  Toast
} from 'vux'

//兼容IE10
if (!location.origin) location.origin = `${location.protocol}//${location.host}`

let origin = (location.hostname == 'localhost') ? 'https://dev.b.xiucaizp.com/' : location.origin + '/'
let baseURL = (location.hostname == 'localhost') ? 'api/whzp-ops-b/' : (location.origin + '/whzp-ops-b/')

/**
 * 功能：构建基本HTTP请求对象
 * 
 */
const instance = axios.create({
  baseURL: baseURL
});
//拦截Response返回值
instance.interceptors.response.use(function (response) {
  // Do something with response data
  let res = response.data
  try {
    //如果错误码为10001，则统一提示
    if (res.code == 10001) {
      res.msg = '系统异常，请联系管理员'
    }
  } catch (ex) {

  }
  return res;
}, function (error) {
  if (error.response) {
    //状态为401，则跳转到登录页面
    if (error.response.status == 401) {
      router.replace('/login');
      Toast('当前用户未登录或登陆超时,请重新登陆')
      return Promise.reject('当前用户未登录或登陆超时')
    }
  }
  // 这里做错误处理
  return Promise.reject(error);
});

/**
 * 功能：封装HTTP请求方法
 * 
 */
export default class Http {
  constructor() {

  }

  /**
   * 源域名
   */
  get origin() {
    return origin
  }

  /**
   * 基础API地址
   */
  get baseURL() {
    return baseURL
  }

  /**
   * 验证码
   */
  get verificationCode() {
    return `${this.baseURL}validcode/getCode?v=${Date.now()}`
  }

  /**
   * 获取上传文件绝对路径
   * @param {String} path - 文件相对路径
   */
  getFilePath(path) {
    if (!path) return ''
    if (location.hostname == 'localhost') {
      //如果是本地环境，则显示图片
      if (/^(tes|dev)\//.test(path)) return `${this.origin}static/upload/test/${path}`
    } else {
      //判断是否开发测试环境
      if (this.origin.indexOf('dev.b.xiucaizp.com') >= 0 || this.origin.indexOf('tes.b.xiucaizp.com') >= 0) return `${this.origin}static/upload/test/${path}`
    }
    //正式环境
    return `${this.origin}static/recurit/uploads/${path}`
  }

  queryStringStringify(params) {
    // let arr = []
    // Object.keys(params).forEach(key => {
    //   let value = params[key]
    //   if(value == null){
    //     value = ''
    //   }
    //   arr.push(`${key}=${encodeURIComponent(value)}`)
    // })
    // return arr.join('&')
    return qs.stringify(params)
  }

  /**
   * POST请求
   * @param {String} url - 接口地址
   * @param {Object} params - 当为数组时，第一个为body值，第二个为query值
   * @param {String} contentType - json
   */
  post(url, params = {}, contentType = 'x-www-form-urlencoded') {

    //当格式类型为json格式时，接口需要同时传入body和query两种参数        
    if (params instanceof Array) {
      if (params.length === 2) url += '?' + this.queryStringStringify(params[1])
      params = params[0]
    }

    if (contentType === 'json') {
      return instance.post(url, params)
    }

    return instance({
      method: 'post',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      url: url,
      data: this.queryStringStringify(params)
    })
  }

  get(url, params = {}) {
    return instance.get(url, {
      params: params
    })
  }

  /**
   * 上传文件
   * @param {String} url - API地址
   * @param {FormData} formData 表单数据
   */
  upload(url, formData) {
    return instance({
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      url: url,
      data: formData
    })
  }

  /**
   * 下载文件
   * @param {String} url 
   * @param {Object} params 
   */
  download(url, params = {}) {
    return new Promise((resolve, reject) => {
      let iframeId = `download-iframe-link`
      let iframe = document.getElementById(iframeId)
      if (!iframe) {
        iframe = document.createElement('iframe')
        iframe.id = iframeId
        iframe.style.display = "none"
        document.body.appendChild(iframe)
        iframe.onload = function () {
          //console.log('下载完成');
          //测试了下没啥用，出现404也会进到这个里面
          resolve()
        }

        iframe.onerror = function () {
          //console.log('出现错误');
          reject()
        }
      }
      //如果传入的是一个链接，则直接下载
      if (url.indexOf('http') === 0) {
        iframe.src = url
      } else {
        iframe.src = `${this.origin}whzp-ops-b/${url}?${this.queryStringStringify(params)}`
      }
    })
  }
}
