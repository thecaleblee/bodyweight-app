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
    }
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