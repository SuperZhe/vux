import Http from "../api/http";

export default class InterviewManage extends Http {
  constructor() {
    super();
  }

  /**
 * 查询所有面试记录
 * @param {string} idCard -  idCard
 */
  interviewManage_getByIdCard(params) {
    return super.post("interviewManage/getByIdCard", params)
  }

  /**
 * 开始面试
 * @param {string} tel -  tel
 * @param {string} idCard -  idCard
 * @param {string} number -  number
 * @param {string} userName -  userName
 * @param {string} sex -  sex
 * @param {string} nation -  nation
 * @param {string} cardAddress -  cardAddress
 * @param {string} birthday -  birthday
 * @param {string} signing -  signing
 * @param {string} overDate -  overDate
 */
  interviewManage_startInterview(params) {
    return super.post("interviewManage/startInterview", params)
  }

  /**
 * 查询所有培训师
 */
  interviewManage_getListTrainer(params) {
    return super.post("interviewManage/getListTrainer", params)
  }

  /**
 * (保存)面试详情添加
 * @param {string} tel -  tel
 * @param {string} userIdCard -  userIdCard
 * @param {integer} status -  status
 * @param {integer} staffType -  staffType
 * @param {integer} positionId -  positionId
 * @param {integer} channel -  channel
 * @param {string} remark -  remark
 * @param {integer} trainerId -  trainerId
 * @param {integer} classId -  classId
 * @param {string} recommender -  recommender
 * @param {string} recTel -  recTel
 * @param {integer} type -  type
 * @param {string} recCompany -  recCompany
 * @param {integer} isFrom -  isFrom
 */
  interviewManage_addInterview(params) {
    return super.post("interviewManage/addInterview", params)
  }

}