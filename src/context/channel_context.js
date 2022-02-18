import React,{useContext,useState,useReducer} from 'react'
import moment from 'moment';
import reducer from '../reducers/channel_reducer'
import {ADD_CHANNEL,CHANGE_CHANNEL} from '../actions'
import { v4 as uuidv4 } from 'uuid';

const ChannelContext = React.createContext()

export const ChannelProvider = ({children}) =>{
    const initialState = {
        defaultChannel:{
            label:"general",
            type:"public",
            id:1
        },
        channelList : [
            {
                label:'general',
                id:1,
                type:"public"
            },
            {
                label:'marketing',
                id:2,
                type:"public"
            },
            {
                label:"threads",
                id:3,
                type:"threads",
            },
            {
                label:"dms",
                id:4,
                type:"dms"
            },
            {
                label:'matija-katharina',
                id:5,
                type:"private"
            },
            {
                label:'matija-biki',
                id:6,
                type:"private"
            }
        ]
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    const addChannel = e => {
        console.log(e.target.value);
        if (e.key === "Enter") {
            dispatch({
                type:ADD_CHANNEL,
                payload:{
                    label:e.target.value,
                    id:uuidv4()
                }
            })
            e.target.value = ""
        }
    }

    const changeChannel = (channel)=>{
        console.log(channel);
        dispatch({
            type:CHANGE_CHANNEL,payload:{...channel}
        })
    }

    return <>
        <ChannelContext.Provider value={{...state,addChannel,changeChannel}}>
            {children}
        </ChannelContext.Provider>
    </>
}

export const useChannelContext = ()=>{
    return useContext(ChannelContext)
}