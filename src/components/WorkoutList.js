import React, { useEffect, useState, useContext } from 'react'
import Move from '../components/Move'

function WorkoutList() {
  const { alternateDay, setAlternateDay } = useState( false )
  const [ displayList, setDisplayList ] = useState([
    {
      id: 1,
      name: "squats"
    },
    {
      id: 2,
      name: "pullups"
    },
    {
      id: 3,
      name: "handstandpushups"
    },
    {
      id: 4,
      name: "legraises"
    },
    {
      id: 5,
      name: "pushups"
    },
    {
      id: 6,
      name: "horizontalpulls"
    },
    {
      id: 7,
      name: "plank"
    },
  ])

  return (
    <>
      <div>
        Toggle { alternateDay ? 'second' : 'first'}
      </div>
      <div>
        Date information
      </div>
      <div className="list-area">
        {displayList.map(move =>
          <Move
            key={move.id}
            id={move.id}
            name={move.name}
          />  
        )}
      </div>
    </>
  )
}

export default WorkoutList 