import React,{useContext,useEffect,useReducer} from 'react'
import moment from 'moment';
import reducer from '../reducers/chat_reducer'
import {INPUT_MESSAGE_CHANGE,CLEAR_MESSAGE_INPUT,POST_CHAT_MESSAGE} from '../actions'
import { v4 as uuidv4 } from 'uuid';

const ChatContext = React.createContext()

export const ChatProvider = ({children}) =>{

    const initialState = {
        channelName : 'general',
        isChatLoading : 'false',
        currentMessage: "",
        messages:[
            {
                displayName:"Matija",
                message:"Who is the best boyfriend ever?",
                timestamp:moment.unix(1644750733),
                channel:'general',
                id:1
            },
            {
                displayName:"Katharina",
                message:"MY BOYFRIEND! YEEEAH",
                timestamp:moment.unix(1644750934),
                channel:'general',
                id:2
            },
            {
                displayName:"Katharina",
                message:"I'm here! Hiiii",
                timestamp:moment.unix(1644750934),
                channel:'marketing',
                id:3
            }
        ],
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    const inputMessageChange = e=>{
        dispatch({
            type:INPUT_MESSAGE_CHANGE,
            payload:e.target.value
        })
    }

    const postMessage = e => {
        const channel = e.target.getAttribute('channel')
        const newMessage = {
            displayName:"Matija",
            message:state.currentMessage,
            timestamp:moment.now(),
            channel
          }
        dispatch({
            type:POST_CHAT_MESSAGE,
            payload:newMessage
        })
    }

    useEffect(()=>{
        dispatch({
            type:CLEAR_MESSAGE_INPUT,
        })
    },[state.channelName])

    return <>
        <ChatContext.Provider value={{...state,inputMessageChange,postMessage}}>
            {children}
        </ChatContext.Provider>
    </>
}

export const useChatContext = ()=>{
    return useContext(ChatContext)
}