import { UPDATE_INFO } from './Type'

const initState = {
  name: '',
  phoneNumber: '',
}

export const InfoReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_INFO: {
      return {
        name: action.payload.name,
        phoneNumber: action.payload.phoneNumber,
      }
    }
    default: {
      return state
    }
  }
}
