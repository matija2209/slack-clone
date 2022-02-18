import React,{useContext,useEffect,useReducer,useState} from 'react'
import moment from 'moment';
import reducer from '../reducers/chat_reducer'
import {INPUT_MESSAGE_CHANGE,CLEAR_MESSAGE_INPUT,POST_CHAT_MESSAGE} from '../actions'
import { v4 as uuidv4 } from 'uuid';

const ChatContext = React.createContext()

export const ChatProvider = ({children}) =>{
    const [channelName,setChannelName] = useState("")
    
    const initialState = {
        channelName : {
            channel:'general',
            id:1
        },
        isChatLoading : 'false',
        currentMessage: "",
        messages:[
            {
                displayName:"Matija",
                userId:1,
                message:"Hello Everyone!",
                timestamp:moment.unix(1644750733),
                channel:'general',
                channelId:1,
                id:1
            },
            {
                displayName:"Katharina",
                userId:2,
                message:"Hello MY BOYFRIEND! YEEEAH",
                timestamp:moment.unix(1644750934),
                channel:'general',
                channelId:1,
                id:2
            },
            {
                displayName:"Katharina",
                userId:2,
                message:"This is marketing house. I'm here! Hiiii. I'll prepare lunch now",
                timestamp:moment.unix(1644750934),
                channel:'marketing',
                channelId:2,
                id:3
            },
            {
                displayName:"Katharina",
                userId:2,
                message:"Hello babY! When are you coming home?",
                timestamp:moment.unix(1644750934),
                channel:'matija-katharina',
                channelId:5,
                id:4
            },
            {
                displayName:"Biki",
                userId:3,
                message:"I'm hungry. Baby Biki is eating all my food",
                timestamp:moment.unix(1644750934),
                channel:'matija-biki',
                channelId:6,
                id:5
            },
            {
                displayName:"Biki",
                userId:3,
                message:"When are you coming back?",
                timestamp:moment.unix(1644950934),
                channel:'matija-biki',
                channelId:6,
                id:5
            },
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
        // const channel = e.target.getAttribute('channel')
        const newMessage = {
            displayName:"Matija",
            message:state.currentMessage,
            timestamp:moment.now(),
            channelId:channelName.id
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
        <ChatContext.Provider value={{...state,inputMessageChange,postMessage,setChannelName}}>
            {children}
        </ChatContext.Provider>
    </>
}

export const useChatContext = ()=>{
    return useContext(ChatContext)
}