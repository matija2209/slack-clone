import React from 'react'
import styled from 'styled-components'
import ChatTextAttachement from './ChatTextAttachement'
import ChatTextModifier from './ChatTextModifier'
import ChatTextInput from './ChatTextInput'



function ChatInput() {
  return (
    <Wrapper>
      <ChatTextModifier></ChatTextModifier>
      <ChatTextInput></ChatTextInput>
      <ChatTextAttachement></ChatTextAttachement>
    </Wrapper>
  )
}

export default ChatInput

const Wrapper = styled.div`
 background-color:#D0D0D0;
 display: grid;
`

