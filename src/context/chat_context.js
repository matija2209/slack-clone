import React,{useContext} from 'react'

const ChatContext = React.createContext()


export const ChatProvider = ({children}) =>{
    return <>
        <ChatContext.Provider value={{test:"HELLO"}}>
            {children}
        </ChatContext.Provider>
    </>
}

export const useChatContext = ()=>{
    return useContext(ChatContext)
}