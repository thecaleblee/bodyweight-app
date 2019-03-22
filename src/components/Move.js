import React, { useState } from 'react'
import squats from '../data/squats.json'

function Move(props) {
  const [ moveId, setMoveId ] = useState("v" + props.id)

  let move = props.name 

  function generateMoves(_move) {
    switch (_move) {
      case ("squats"):
        return move = squats.versions.filter(m => m.id === moveId).map(v => {
          return <><h1 key={v.id}>{v.name}</h1><h4>{v.id}</h4></>
        })
        default: return
    }
  }

    //return squats.map(v => {
    //  v.name
    //})

  return (
    <>
      {generateMoves(move)}
    </>
  )
}

export default Move 