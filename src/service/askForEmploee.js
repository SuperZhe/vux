import Http from "../api/http";

export default class AskForEmploee extends Http {
  constructor() {
    super();
  }

  /**
 * 要人分人报表
 * @param {integer} areaId -  areaId
 * @param {integer} cityId -  cityId
 * @param {integer} regionId -  regionId
 * @param {string} startTime -  startTime
 * @param {string} endTime -  endTime
 */
  askForEmploee_planReport(params) {
    return super.post("askForEmploee/planReport", params)
  }

  /**
 * 二维码总收入
 * @param {integer} regionId -  regionId
 * @param {integer} areaId -  areaId
 * @param {integer} cityId -  cityId
 * @param {string} startTime -  startTime
 * @param {string} endTime -  endTime
 */
  askForEmploee_qrcodeIncomeReport(params) {
    return super.post("askForEmploee/qrcodeIncomeReport", params)
  }

  /**
 * 7天存活报表
 * @param {integer} areaId -  areaId
 * @param {integer} cityId -  cityId
 * @param {integer} regionId -  regionId
 */
  askForEmploee_surviveReport(params) {
    return super.post("askForEmploee/surviveReport", params)
  }

}