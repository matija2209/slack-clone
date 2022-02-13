import React,{useContext,useReducer} from 'react'
import moment from 'moment';
import reducer from '../reducers/chat_reducer'

const ChatContext = React.createContext()

export const ChatProvider = ({children}) =>{

    const initialState = {
        channelName : 'general',
        isChatLoading : 'false',
        messages:[
            {
                displayName:"Matija",
                message:"Who is the best boyfriend ever?",
                timestamp:moment.unix(1644750733),
                channel:'general'
            },
            {
                displayName:"Katharina",
                message:"MY BOYFRIEND! YEEEAH",
                timestamp:moment.unix(1644750934),
                channel:'general'
            },
        ],
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    return <>
        <ChatContext.Provider value={{...state}}>
            {children}
        </ChatContext.Provider>
    </>
}

export const useChatContext = ()=>{
    return useContext(ChatContext)
}