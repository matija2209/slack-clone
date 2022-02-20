import React from 'react'
import styled from 'styled-components'
import { useChatContext } from '../context/chat_context'
import {useUserContext} from '../context/user_context'

function ChannelListItem({...obj}) {
const {channel,changeChannel} = obj
  const {setChannelName} = useChatContext()
  const {loggedUserDisplayName} = useUserContext()
  

  const friendlyDmName = ()=>{
    if (channel.type === "private") {
      return channel.label.split("-")[1]
    }
    return channel.label
  
  }

  const handleClick = e =>{
    e.preventDefault()
    let currentUser = channel.label
    if (channel.type === "private") {
      currentUser = `${loggedUserDisplayName}-${channel.label}`.toLocaleLowerCase()
    }
    console.log(channel);
    changeChannel({...channel})
    setChannelName({
      ...channel,label:currentUser})
    
  }
  return <>
    <Wrapper key={channel.id}>
      {channel.type === "private"?"":"#"}<input type="button" value={friendlyDmName()} onClick={handleClick} />
    </Wrapper>
  </>
}

export default ChannelListItem

const Wrapper = styled.li`

`