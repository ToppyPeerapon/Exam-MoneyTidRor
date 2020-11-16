import { UPDATE_INFO } from './Type'

export const updateInfo = payload => {
  return {
    type: UPDATE_INFO,
    payload,
  }
}
