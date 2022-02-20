import React from 'react'
import ListTitle from './ListTitle'
import {useUserContext} from '../context/user_context'
import {useChannelContext} from '../context/channel_context'
import ChannelListItem from './ChannelListItem'

function DirectMessagesList() {
  const {loggedUserId,loggedUserDisplayName,users} = useUserContext()
  const {changeChannel,channelList} = useChannelContext()

  const friends = users.filter(user=>user.id === loggedUserId).map(user=>user.friends)[0]
  
  const dms = channelList
  .filter(cn=>cn.type === "private")
  .filter(dm=>{
    const friendsDms = friends.map(friend=>`${loggedUserDisplayName}-${friend.label}`.toLocaleLowerCase())
    return friendsDms.find(friendThread=>friendThread===dm.label)
  })

  // .fitler(cn=>{
  //   console.log(cn);
  //   const x= friends.filter(friend=>{
  //     const friendChatThreadName = `${loggedUserDisplayName}-${friend.label}`.toLocaleLowerCase()
  //     return cn.label === friendChatThreadName
  //   })
  //   console.log(x);
  // })


  // const getFriendChatThreads = friends.filter((friend)=>{
  //   const friendChatThreadName = `${loggedUserDisplayName}-${friend.label}`.toLocaleLowerCase()
  //   const getChatThreadPerQuery = messages.filter(msg=>{
  //     return msg.channel === friendChatThreadName
  //   })
  //   return getChatThreadPerQuery
  // })
  console.log(dms);
  return <>
    <ListTitle title="Direct messages"></ListTitle>
    <ul>
      {dms.map(channel=>{
        return <ChannelListItem channel={channel} changeChannel={changeChannel}>
        </ChannelListItem>
      })}
    </ul>
  </>
}

export default DirectMessagesList