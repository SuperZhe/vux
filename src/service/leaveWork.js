import Http from "../api/http";

export default class LeaveWork extends Http {
  constructor() {
    super();
  }


  /***********人员离职确认***************/
  /**
   * 查看详情
   * @param {integer} id -  id
   */
  leaveWork_getById(params) {
    return super.post("leaveWork/getById", params)
  }

  /**
   * 人员离职确认分页列表
   * @param {integer} page -  page
   * @param {integer} perPage -  perPage
   */
  leaveWork_getListByPage(params) {
    return super.post("leaveWork/getListByPage", params)
  }

  /**
   * 确认离职(片区)
   * @param {string} idCard -  idCard
   * @param {integer} id -  id
   */
  leaveWork_updateStatusByCard(params) {
    return super.post("leaveWork/updateStatusByCard", params)
  }


}