import React from 'react'
import styled from 'styled-components'
import {useChatContext} from '../context/chat_context'
import {useChannelContext} from '../context/channel_context'

function ChatTextAttachement() {
  const {postMessage} = useChatContext();
  const {defaultChannel} = useChannelContext()
  
  return <>
    <Wrapper>
      <div>
        <span>B</span>
        <span>I</span>
        <span>@</span>
      </div>
      <input type="button" value="SEND" onClick={postMessage} channel={defaultChannel.label}/>
    </Wrapper>
  </>
}

export default ChatTextAttachement

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 10%;
`