import Http from "../api/http";

export default class UserClass extends Http {
  constructor() {
    super();
  }


  /**
   * 班级管理分页列表
   * @param {integer} page -  page
   * @param {integer} perPage -  perPage
   */
  userClass_list(params) {
    return super.post("userClass/list", params)
  }

  /**
 * 班级成员列表
 * @param {integer} page -  page
 * @param {integer} perPage -  perPage
 * @param {integer} id -  id
 * @param {string} userName -  userName
 * @param {string} idCard -  idCard
 */
  userClass_getUserById(params) {
    return super.post("userClass/getUserById", params)
  }
  /**
 * 班级详情
 * @param {integer} id -  id
 */
  userClass_getUserClassById(params) {
    return super.post("userClass/getUserClassById", params)
  }

  /**
 * 培训记录返回班级信息
 * @param {integer} classId -  classId
 * @param {string} userIdCard -  userIdCard
 */
  userClass_getClassByClassId(params) {
    return super.post("userClass/getClassByClassId", params)
  }

  /**
 * 返回培训师所带班级
 * @param {integer} trainer -  trainer
 */
  userClass_getClassByTrainer(params) {
    return super.post("userClass/getClassByTrainer", params)
  }



}