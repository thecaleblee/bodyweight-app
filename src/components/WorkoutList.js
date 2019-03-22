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

  return (
    <>
      <style>{`
        .list-area {
          overflow-y: scroll;
        }
      `}</style>
      <div>
        Toggle { alternateDay ? 'second' : 'first'}
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
  )
}

export default WorkoutList 