import React from 'react'

export default function AddChannel({addChannel}) {
  return (
    <input type="text" name="add_channel" id="add_channel" onKeyPress={addChannel} />
  )
}
