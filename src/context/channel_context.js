import React,{useContext,useReducer} from 'react'
import moment from 'moment';
import reducer from '../reducers/channel_reducer'
import {ADD_CHANNEL} from '../actions'

const ChannelContext = React.createContext()

export const ChannelProvider = ({children}) =>{

    const initialState = {
        defaultChannel:"general",
        channelList : [
            'general'
        ]
    }

    const [state,dispatch] = useReducer(reducer,initialState)
    console.log(state);
    const addChannel = e => {
        if (e.key === "Enter") {
            dispatch({type:ADD_CHANNEL,payload:e.target.value})
            e.target.value = ""
        }
        
    }

    return <>
        <ChannelContext.Provider value={{...state,addChannel}}>
            {children}
        </ChannelContext.Provider>
    </>
}

export const useChannelContext = ()=>{
    return useContext(ChannelContext)
}