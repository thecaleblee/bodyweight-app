import React, { useState } from 'react'
import Image from '../components/Image'

function Move(props) {
  const [ moveId, setMoveId ] = useState(`v${props.id}`)

  let move = props.name 
  const moveJson = require(`../data/${move}.json`)

  function generateMoves(_move) {
    return move = moveJson.versions.filter(m => m.id === moveId).map(v => {
      return (
        <>
          <Image url={_move} id={v.id} />
          <h1 key={v.id}>{v.name}</h1>
          <h4>{v.id}</h4>
        </>
      )
    })
  }

  return (
    <>
      {generateMoves(move)}
    </>
  )
}

export default Move 