import React from 'react'
import ListTitle from './ListTitle'
import {useUserContext} from '../context/user_context'
import {useChannelContext} from '../context/channel_context'
import ChannelListItem from './ChannelListItem'

function DirectMessagesList() {
  const {loggedUserId,users} = useUserContext()
  const {changeChannel} = useChannelContext()

  const loggedUserFriends = users.filter(user=>user.id === loggedUserId).map(user=>user.friends)[0]
  console.log(loggedUserFriends);
  return <>
    <ListTitle title="Direct messages"></ListTitle>
    <ul>
      {loggedUserFriends.map(channel=>{
        return <ChannelListItem channel={channel} changeChannel={changeChannel}>
        </ChannelListItem>
      })}
    </ul>
  </>
}

export default DirectMessagesList