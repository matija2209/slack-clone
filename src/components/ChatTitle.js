import React from 'react'
import styled from 'styled-components'

function ChatTitle({name}) {
  return (
    <Wrapper>
      <span>#{name}</span>
    </Wrapper>
  )
}

export default ChatTitle

const Wrapper = styled.div`
  border-bottom: 1px solid grey;
`