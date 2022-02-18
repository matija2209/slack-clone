import React from 'react'
import ListTitle from './ListTitle'
import AddChannel from './AddChannel'
import {useChannelContext} from '../context/channel_context'
import ChannelListItem from './ChannelListItem'
import { useUserContext } from '../context/user_context'

function ChannelsList() {
  const {addChannel,changeChannel,channelList} = useChannelContext()
  const {loggedUserId,users} = useUserContext()
  const userData = users.find(user=>user.id === loggedUserId)
  const channelMemebership = userData.member

  const channelsData = channelMemebership.map(cn=>{
    return {...channelList.find(channel=>channel.id===cn.id)}
  }).filter(cn=>cn.type==="public")

  const staticChannels = channelList.filter(cn=>cn.type !== "private" && cn.type !== "public")

  return <>

    <ul>
      {staticChannels.map(channel=>{
        return <ChannelListItem channel={channel} changeChannel={changeChannel}>
        </ChannelListItem>
      })}
    </ul>

    <ListTitle title="Channels"></ListTitle>
    <ul>
      {channelsData.map(channel=>{
        return <ChannelListItem channel={channel} changeChannel={changeChannel}>
        </ChannelListItem>
      })}
    </ul>
    <AddChannel addChannel={addChannel}></AddChannel>
  </>
}

export default ChannelsList