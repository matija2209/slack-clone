import React,{useContext,useState,useReducer} from 'react'
import moment from 'moment';
import reducer from '../reducers/user_reducer'
import {INPUT_MESSAGE_CHANGE,CLEAR_MESSAGE_INPUT,POST_CHAT_MESSAGE} from '../actions'
import { v4 as uuidv4 } from 'uuid';

const UserContext = React.createContext()

export const UserProvider = ({children}) =>{
    

    const initialState = {
        loggedUserId : 1,
        loggedUserDisplayName : "Matija",
        isAdmin:true,
        friends : [
            {
                id:2,
                label:"Katharina",
                isAdmin:false,
                type:"private"
            },
            {
                id:3,
                label:"Biki",
                isAdmin:false,
                type:"private"
            }
        ]
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    return <>
        <UserContext.Provider value={{...state}}>
            {children}
        </UserContext.Provider>
    </>
}

export const useUserContext = ()=>{
    return useContext(UserContext)
}