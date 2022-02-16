import React from 'react'
import styled from 'styled-components'

function ChannelListItem({...obj}) {
const {channel,changeChannel} = obj

  return <>
    <Wrapper key={channel.id}>
      #<input type="button" value={channel.label} onClick={changeChannel} />
       
    </Wrapper>
  </>
}

export default ChannelListItem

const Wrapper = styled.li`

`