import Http from "../api/http";

export default class Recruit extends Http {
  constructor() {
    super();
  }

  /**
 * 要人计划管理(移动端)
 * @param {integer} page -  page
 * @param {integer} perPage -  perPage
 * @param {integer} type -  type
 */
  recruit_listForApp(params) {
    return super.post("recruit/listForApp", params)
  }

  /**
 * 详情
 * @param {integer} id -  id
 */
  recruit_getById(params) {
    return super.post("recruit/getById", params)
  }


  /**
   * 关闭
   * @param {integer} id -  id
   * @param {integer} status -  status
   * @param {string} closeReason -  closeReason
   */
  recruit_close(params) {
    return super.post("recruit/close", params)
  }

  /**
 * 门店新增要人计划
 * @param {string} title -  title
 * @param {integer} trainbaseId -  trainbaseId
 * @param {integer} total -  total
 * @param {integer} storeType -  storeType
 * @param {string} planEndTime -  planEndTime
 * @param {string} remark -  remark
 * @param {string} finishCharge -  finishCharge
 * @param {integer} adminId -  adminId
 * @param {integer} isSpecially -  isSpecially
 * @param {integer} isUrgency -  isUrgency
 */
  recruit_storeAdd(params) {
    return super.post("recruit/storeAdd", params)
  }


  /**
   * 当前完成人员(移动端)
   * @param {integer} page -  page
   * @param {integer} perPage -  perPage
   * @param {integer} planId -  planId
   */
  recruit_completedMembers(params) {
    return super.post("recruit/completedMembers", params)
  }

  /**
 * 离职(门店)
 * @param {integer} id -  id
 * @param {integer} planId -  planId
 */
  recruit_leave(params) {
    return super.post("recruit/leave", params)
  }

  /**
 * 门店新增要人计划检测
 */
  recruit_storeAddCheck(params) {
    return super.post("recruit/storeAddCheck", params)
  }
  /**
 * 重试、确认到岗
 * @param {integer} id -  id
 * @param {integer} planId -  planId
 * @param {integer} serialNum -  serialNum
 * @param {string} card -  card
 * @param {integer} again -  again
 */
  recruit_retry(params) {
    return super.post("recruit/retry", params)
  }

  /**
 * 驳回
 * @param {integer} id -  id
 * @param {integer} planId -  planId
 */
  recruit_reject(params) {
    return super.post("recruit/reject", params)
  }

  /**
 * 更新已阅消息
 * @param {integer} id -  id
 */
  recruit_updateIsRead(params) {
    return super.post("recruit/updateIsRead", params)
  }

  /**
 * 审核未通过消息
 */
  recruit_auditNoPassMsg(params) {
    return super.post("recruit/auditNoPassMsg", params)
  }


}