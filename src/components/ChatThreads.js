import React from 'react'
import {useChatContext} from '../context/chat_context'
import {useChannelContext} from '../context/channel_context'
import {useUserContext} from '../context/user_context'
import ChatThread from './ChatThread'

function ChatThreads() {
  const {messages} = useChatContext();
  const {defaultChannel} = useChannelContext()
  const {loggedUserDisplayName} = useUserContext()
  let currentUser = defaultChannel.label
  if (defaultChannel.type === "private") {
    currentUser = `${loggedUserDisplayName}-${defaultChannel.label}`.toLocaleLowerCase()
  }
  const threadMessages = messages.filter(msg=>msg.channel === currentUser)
  
  return <>
   {threadMessages.map(msg=>{
     return <ChatThread msg={msg}></ChatThread>
   })}
  </>
}

export default ChatThreads