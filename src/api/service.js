//使用MIX方法，解决多继承的问题
function mix(...mixins) {
  class Mix {}
  for (let mixin of mixins) {
    copyProperties(Mix.prototype, mixin); // 拷贝实例属性
    copyProperties(Mix.prototype, Reflect.getPrototypeOf(mixin)); // 拷贝原型属性
  }

  return Mix;
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if (key !== "constructor" &&
      key !== "prototype" &&
      key !== "name"
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}
//引用需要继承的类
let classArray = [];
[
  require('./http'),
  require('../service/recruit')
].forEach(cls => {
  //console.log(cls)
  classArray.push(new cls.default())
})



/**
 * 所有接口
 */
export default class Service extends mix(...classArray) {
  constructor() {
    super();
  }

  /**
   * 登陆
   * @param {string} username -  username
   * @param {integer} pwd -  pwd
   */
  mobile_login(params) {
    return super.post("/mobile/login", params)
  }
  /**
   * 岗位管理分页列表
   * @param {integer} page -  page
   * @param {integer} perPage -  perPage
   */
  position_list(params) {
    return super.post("position/list", params)
  }

  /**
   * 所有渠道列表
   */
  phoneSource_getAllList(params) {
    return super.post("phoneSource/getAllList", params)
  }

  /**
   * 获取微信企业号签名
   */
  WXSign_getSign(params) {
    return super.post("WXSign/getSign", params)
  }

  /**
   * 解析身份证图片信息
   * @param {string} file -  file
   * @param {integer} fileType -  fileType
   */
  IdCardApi_getIdCardMessage(formData) {
    return super.upload("IdCardApi/getIdCardMessage", formData)
  }


  /**
   * 学员管理列表
   * @param {integer} page -  page
   * @param {integer} perPage -  perPage
   * @param {string} idCard -  idCard
   * @param {string} userName -  userName
   * @param {integer} status -  status
   */
  userBase_list(params) {
    return super.post("userBase/list", params)
  }



  /**
   * 获取所有片区
   */
  area_allAreaList(params) {
    return super.post("area/allAreaList", params)
  }

  /**
   * 获取所有大区
   */
  region_RegionList(params) {
    return super.post("region/RegionList", params)
  }

  /**
   * 获取所有微海城市
   */
  city_allCityList(params) {
    return super.post("city/allCityList", params)
  }


  /**
   * 判断该人员是否来自话务中心
   * @param {string} userMobile -  userMobile
   */
  allOrder_getIsFromCall(params) {
    return super.post("allOrder/getIsFromCall", params)
  }


  /**
   * 通过推荐人手机号查询海底捞被推荐人（查询按钮时调用）
   * @param {string} mobile -  mobile
   */
  internalRef_getByRefTel(params) {
    return super.post("internalRef/getByRefTel", params)
  }

  /**
   * 通过被推荐人手机号查询海底捞推荐人（开始面试时调用）
   * @param {string} mobile -  mobile
   */
  internalRef_getByTel(params) {
    return super.post("internalRef/getByTel", params)
  }

  /**
   * 员工类型下拉列表
   */
  staffType_getAll(params) {
    return super.post("staffType/getAll", params)
  }

  /**
   * 预约管理分页列表
   * @param {integer} page -  page
   * @param {integer} perPage -  perPage
   * @param {string} number -  number
   * @param {string} username -  username
   * @param {string} userMobile -  userMobile
   * @param {string} startAppointmentDate -  startAppointmentDate
   * @param {string} endAppointmentDate -  endAppointmentDate
   * @param {integer} status -  status
   */
  orderManage_getListByPage(params) {
    return super.post("orderManage/getListByPage", params)
  }
  /**
   * 创建面试人员
   * @param {string} tel -  tel
   * @param {string} idCard -  idCard
   * @param {string} userName -  userName
   * @param {string} sex -  sex
   * @param {string} nation -  nation
   * @param {string} cardAddress -  cardAddress
   * @param {string} birthday -  birthday
   * @param {string} signing -  signing
   * @param {string} overDate -  overDate
   */
  orderManage_addUserBase(params) {
    return super.post("orderManage/addUserBase", params)
  }
}
