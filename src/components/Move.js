import React, { useState, useEffect } from 'react'
import Image from '../components/Image'

function Move(props) {
  const [ moveId, setMoveId ] = useState(`v${props.id}`)
  const [ levelA, setlevelA ] = useState(1)
  const [ levelB, setlevelB ] = useState(1)
  const [ levelC, setlevelC ] = useState(1)

  let move = props.name 
  const moveJson = require(`../data/${move}.json`)

  function setLevel(e) {
    e.preventDefault()
    let level = e.target.name;
        setMoveId(`v${levelC}`)

    switch (level) {
      case ("A"):
        return setlevelA(lvl => lvl + 1)
      case ("B"):
        return setlevelB(lvl => lvl + 1) 
      case ("C"):
        return setlevelC(lvl => lvl + 1)
      default: return
    }
  }

  function generateMoves(_move) {
    return move = moveJson.versions.filter(m => m.id === moveId).map(v => {
      return (
        <div className="display-block">
          <style>{`
            .display-block {
              display: block;
            }
          `}</style>
          <Image url={_move} id={v.id} />
          <h1 key={v.id}>{v.name}</h1>
          <h4>{v.id}</h4>
          <button onClick={setLevel} name="A">{levelA}</button>
          <button onClick={setLevel} name="B">{levelB}</button>
          <button onClick={setLevel} name="C">{levelC}</button>
        </div>
      )
    })
  }

  useEffect(()=> {
    console.log("A ", levelA, "  B", levelB, "  C ", levelC)
    if ( levelA > 7 && levelB > 7 && levelC > 7 ) {
      generateMoves(moveId)
      setlevelA(1)
      setlevelB(1)
      setlevelC(1)
    }
  }, [generateMoves, setLevel, levelA, levelB, levelC])

  return (
    <>
      {generateMoves(move)}
    </>
  )
}

export default Move 