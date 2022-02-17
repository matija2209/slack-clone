import React from 'react'
import ListTitle from './ListTitle'
import {useUserContext} from '../context/user_context'
import {useChannelContext} from '../context/channel_context'
import ChannelListItem from './ChannelListItem'

function DirectMessagesList() {
  const {friends} = useUserContext()
  const {changeChannel} = useChannelContext()
  return <>
    <ListTitle title="Direct messages"></ListTitle>
    <ul>
      {friends.map(channel=>{
        return <ChannelListItem channel={channel} changeChannel={changeChannel}>
        </ChannelListItem>
      })}
    </ul>
  </>
}

export default DirectMessagesList