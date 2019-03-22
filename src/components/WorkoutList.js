import React, { useEffect, useState, useContext } from 'react'
import Move from '../components/Move'

function WorkoutList() {
  const [ alternateDay, setAlternateDay ] = useState( false )
  const [ dayOne, setDayOne ] = useState([
    {
      id: 1,
      name: "squats"
    },
    {
      id: 1,
      name: "pullups"
    },
    {
      id: 1,
      name: "handstandpushups"
    },
    {
      id: 1,
      name: "legraises"
    },
    {
      id: 1,
      name: "pushups"
    },
    {
      id: 1,
      name: "horizontalpulls"
    },
    {
      id: 1,
      name: "plank"
    },
  ])

  const [ dayTwo, setDayTwo ] = useState([
    {
      id: 1,
      name: "squats"
    },
    {
      id: 1,
      name: "pullups"
    },
    {
      id: 1,
      name: "handstandpushups"
    },
    {
      id: 1,
      name: "legraises"
    },
    {
      id: 1,
      name: "dips"
    },
    {
      id: 1,
      name: "horizontalpulls"
    },
    {
      id: 1,
      name: "plank"
    },
  ])

  const [ displayList, setDisplayList ] = useState(dayOne)

  function updateList(e) {
    e.preventDefault() 
    setAlternateDay(!alternateDay)
    alternateDay ?
    setDisplayList(dayOne)
    :
    setDisplayList(dayTwo)
  }

  useEffect(() => {
  }, [alternateDay, dayOne, dayTwo])

  return (
    dayOne.length  && dayTwo.length ?
    <>
      <style>{`
        .list-area {
          overflow-y: scroll;
        }
      `}</style>
      <div>
        <a onClick={updateList}>
          { alternateDay ? 'second' : 'first'}
        </a>
      </div>
      <div>
        Date information
      </div>
      <div className="list-area">
        {displayList.map( (move, i ) => 
          <Move
            key={i}
            id={move.id}
            name={move.name}
          />  
        )}
      </div>
    </>
    : <h1>No excersizes loaded</h1>
  )
}

export default WorkoutList 