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
              background: #fff;
              border: 1px solid #ccc;
              padding: 3px;
              display: block;
              margin-top: 10px;
              border-radius: 3px;
            }
            .display-block:first-child {
              margin-top: 20px;
            }
            .display-block::after {
              content: '';
              clear: both;
              display: block;
              width: 100%;
              clear: both;
            }
            img {
              float: left;
              height: 128px;
              width: 170px;
              border-radius: 2px 0 0 2px;
              border-right: 1px solid #ccc;
            }
            h1 {
              padding-left: 185px;
              font-size: 14px;
              font-family: sans-serif;
            }
            h4 {
              padding-left: 185px;
            }
            .button-group button {
              background: #fefefe;
              float: right;
              border: 1px solid #ddd;
              border-left: none;
              border-right: none;
              display: block;
              padding: 12px 16px;
            }
            .button-group button:nth-child(3) {
              border-radius: 6px 0 0 6px;
              border-right: 1px solid #ddd;
              border-left: 1px solid #ddd;
            }
            .button-group button:first-child {
              border-radius: 0 6px 6px 0;
              border-right: 1px solid #ddd;
              border-left: 1px solid #ddd;
            }
          `}</style>
          <Image url={_move} id={v.id} />
          <h1 key={v.id}>{v.name}</h1>
          <h4>{v.id}</h4>
          <div className="button-group">
            <button onClick={setLevel} name="A">{levelA}</button>
            <button onClick={setLevel} name="B">{levelB}</button>
            <button onClick={setLevel} name="C">{levelC}</button>
          </div>
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