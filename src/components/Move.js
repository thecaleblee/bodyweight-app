import React, { useState, useEffect } from 'react'
import Image from '../components/Image'
import useLocalStorage from '../components/useLocalStorage' 

function Move(props) {
  let move = props.name 
  const moveJson = require(`../data/${move}.json`)

  let storeId = moveJson.storeId;
  const [ moveId, setMoveId ] = useState(useLocalStorage(storeId, `v${props.id}`))
  console.log('INITIAL STATE: ', moveId)

  const [ prevLevel, setPrevLevel ] = useState(moveId)
  const [ levelA, setlevelA ] = useState(useLocalStorage(`${storeId}${moveId}lvlA`, 1))
  const [ levelB, setlevelB ] = useState(useLocalStorage(`${storeId}${moveId}lvlB`, 1))
  const [ levelC, setlevelC ] = useState(useLocalStorage(`${storeId}${moveId}lvlC`, 1))

  function setLevel(e) {
    e.preventDefault()
    let level = e.target.name;

    switch (level) {
      case ("A"):
        const newLevelA = levelA => parseInt(levelA, 10) + 1

        window.localStorage.setItem(
          `${storeId}${moveId}lvlA`
          , parseInt(levelA, 10) + 1
        )

        return setlevelA(newLevelA)
      case ("B"):
        const newLevelB = levelB => parseInt(levelB, 10) + 1

        window.localStorage.setItem(
          `${storeId}${moveId}lvlB`
          , parseInt(levelB, 10) + 1
        )

        return setlevelB(newLevelB)
      case ("C"):
        const newLevelC = levelC => parseInt(levelC, 10) + 1
        
        window.localStorage.setItem(
          `${storeId}${moveId}lvlC`
          , parseInt(levelC, 10) + 1
        )

        return setlevelC(newLevelC)
      default: return
    }
  }
  
  function nextLevel() {
    setPrevLevel(moveId)
    const nextMove = (parseInt(moveId.split('v', 2)[1] , 10) + 1);
    setMoveId(`v${nextMove}`)
    window.localStorage.setItem(storeId, `v${nextMove}`)
  }

  function previousLevel() {
    const tempMove = (parseInt(moveId.split('v', 2)[1] , 10) - 1);
    setPrevLevel(tempMove - 1)
    setMoveId(`v${tempMove}`)
    setlevelA(5)
    setlevelB(5)
    setlevelC(5)
    window.localStorage.setItem(storeId, `v${tempMove}`)
  }

  function generateMoves(_move) {
    return move = moveJson.versions
      .filter(m => m.id === moveId)
      .map(v => {
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
            h6 {
              float: left;
              margin: 0;
              padding-left: 14px;
            }
            .button-group button {
              background: #fefefe;
              float: right;
              border: 1px solid #ddd;
              border-left: none;
              border-right: none;
              display: block;
              padding: 12px 16px;
              user-select: none;
              -moz-user-select: none;
              -webkit-user-select: none;
              -ms-user-select: none;
              outline: none !important;
              cursor: pointer;
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
          <h4>{v.id}</h4> {moveId != "v1" ? <h6><a onClick={previousLevel}>( back to {prevLevel}? )</a></h6> : ''}
          <div className="button-group">
            <button onClick={setLevel} name="C">{levelC}</button>
            <button onClick={setLevel} name="B">{levelB}</button>
            <button onClick={setLevel} name="A">{levelA}</button>
          </div>
        </div>
      )
    })
  }

  useEffect(()=> {
    if ( levelA > 7 && levelB > 7 && levelC > 7 ) {
      nextLevel()
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