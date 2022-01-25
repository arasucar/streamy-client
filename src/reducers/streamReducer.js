import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types'
import _ from 'lodash'

// eslint-disable-next-line
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return {...state, ..._.mapKeys(action.payload, 'id')}
    case FETCH_STREAM || EDIT_STREAM || CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload}
    case DELETE_STREAM:
      return _.omit(state, action.payload)
    default:
      return state
  }
}