import React,{useContext,useReducer} from 'react'
import moment from 'moment';
import reducer from '../reducers/chat_reducer'

const ChannelContext = React.createContext()

export const ChannelProvider = ({children}) =>{

    const initialState = {
        channelList : [
            'general'
        ]
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    return <>
        <ChannelContext.Provider value={{...state}}>
            {children}
        </ChannelContext.Provider>
    </>
}

export const useChannelContext = ()=>{
    return useContext(ChannelContext)
}