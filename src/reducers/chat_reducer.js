import {
    SIDEBAR_OPEN,
    CLEAR_MESSAGE_INPUT,
    INPUT_MESSAGE_CHANGE,
    POST_CHAT_MESSAGE
  } from '../actions'

export default function chat_reducer(state,action) {
    const type = action.type
    switch (type) {
        case INPUT_MESSAGE_CHANGE:
          return {...state,currentMessage:action.payload}    
        case CLEAR_MESSAGE_INPUT:
          return {...state,currentMessage:""}    
        case POST_CHAT_MESSAGE:
          return {...state,messages:[...state.messages,action.payload]}
        default:
            break;
    }
  return (
    state
  )
}
