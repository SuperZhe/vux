import {
  dateFormat
} from 'vux'

const date = dateFormat
export function timeFormat(val) {
  return date(val, 'YYYY-MM-DD')
}
