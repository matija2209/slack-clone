import React from 'react'
import {useChatContext} from '../context/chat_context'
import {useChannelContext} from '../context/channel_context'
import {useUserContext} from '../context/user_context'
import ChatThread from './ChatThread'

function ChatThreads() {
  const {messages} = useChatContext();
  const {defaultChannel,channelList} = useChannelContext()
  const {loggedUserDisplayName,users,loggedUserId} = useUserContext()
  let currentChannel = defaultChannel.label
  const userData = users.find(user=>user.id === loggedUserId)

  let threadMessages = messages.filter(msg=>msg.channelId === defaultChannel.id)
  // does the filtering to show only messages that belong to the user

  if (defaultChannel.type === "private") {
    // currentChannel = `${loggedUserDisplayName}-${defaultChannel.label}`.toLocaleLowerCase()
  }
  if (defaultChannel.type === "dms") {
    const friends = userData.friends
    threadMessages = messages.filter(msg=>{
      return friends.filter(friend=>{
        const dmName = `${loggedUserDisplayName}-${friend.label}`.toLocaleLowerCase()
        return msg.channel === dmName
      }).length > 0
    })
  }

  if (defaultChannel.type === "threads"){
    const memberOf = userData.member
    threadMessages = messages.filter(chn=>{
      return memberOf.filter(channel=>{
        return chn.channelId === channel.id
      }).length > 0
    })
  }
  
  return <>
   {threadMessages.map(msg=>{
     return <ChatThread msg={msg}></ChatThread>
   })}
  </>
}

export default ChatThreads