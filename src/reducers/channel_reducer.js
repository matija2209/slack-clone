import {
  ADD_CHANNEL
  } from '../actions'

export default function channel_reducer(state,action) {
    const type = action.type
    switch (type) {
        case ADD_CHANNEL:
            return {...state,channelList:[...state.channelList,action.payload]}
        default:
            break;
    }
}
