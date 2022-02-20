import React from 'react'
import { useChannelContext } from '../context/channel_context'
import { useUserContext } from '../context/user_context'

function UserCount() {
    const {defaultChannel } = useChannelContext()
    const {users} = useUserContext()
    const activeChannelId = defaultChannel.id
    const noUsers = users.filter(user=>{
        const membership = user.member
        try {
            const match = membership.find(member=>{
                return member.id === activeChannelId
            }).id
            return true
        } catch {
            return false
        }
    }).length
    // - Get the active channel
    // - Pull all users and filter them by their membership to that channel
  return (
    <div>Number of users: {noUsers}</div>
  )
}

export default UserCount