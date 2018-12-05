import Http from "../api/http";

export default class EmploeeReport extends Http {
  constructor() {
    super();
  }

  /***********员工各阶段报表***************/
  /**
   * 7天考核
   * @param {integer} regionId -  regionId
   * @param {integer} areaId -  areaId
   * @param {integer} cityId -  cityId
   * @param {string} startTime -  startTime
   * @param {string} endTime -  endTime
   */
  emploeeReport_examResult(params) {
    return super.post("emploeeReport/examResult", params)
  }

  /**
   * 面试结果情况
   * @param {integer} regionId -  regionId
   * @param {integer} areaId -  areaId
   * @param {integer} cityId -  cityId
   * @param {string} startTime -  startTime
   * @param {string} endTime -  endTime
   */
  emploeeReport_interviewResult(params) {
    return super.post("emploeeReport/interviewResult", params)
  }

  /**
   * 到面人数
   * @param {integer} areaId -  areaId
   * @param {integer} regionId -  regionId
   * @param {integer} cityId -  cityId
   * @param {string} startTime -  startTime
   * @param {string} endTime -  endTime
   */
  emploeeReport_interviewedCounts(params) {
    return super.post("emploeeReport/interviewedCounts", params)
  }

  /**
   * 到岗人数
   * @param {integer} regionId -  regionId
   * @param {integer} areaId -  areaId
   * @param {integer} cityId -  cityId
   * @param {string} startTime -  startTime
   * @param {string} endTime -  endTime
   */
  emploeeReport_onDutyCount(params) {
    return super.post("emploeeReport/onDutyCount", params)
  }

  /**
   * 培训结果情况
   * @param {integer} regionId -  regionId
   * @param {integer} areaId -  areaId
   * @param {integer} cityId -  cityId
   * @param {string} startTime -  startTime
   * @param {string} endTime -  endTime
   */
  emploeeReport_trainingResult(params) {
    return super.post("emploeeReport/trainingResult", params)
  }

  /**
   * 到面方式
   * @param {integer} areaId -  areaId
   * @param {integer} regionId -  regionId
   * @param {string} startTime -  startTime
   * @param {string} endTime -  endTime
   */
  emploeeReport_wayOfInviteResult(params) {
    return super.post("emploeeReport/wayOfInviteResult", params)
  }

}