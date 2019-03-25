import React from 'react'
import { Link } from 'react-router-dom' 

function IndexPage() {
  return (
    <>
      <h1>Index Page</h1>
      <h2>QUICK OVERVIEW:</h2>
      <ul>
        <li>START WITH A QUICK 5 MIN WARM UP FOLLOWED BY DYNAMIC STRETCHES</li>
        <li>
          PERFORM 3 SETS OF BETWEEN 4 AND 8 REPETITIONS FOR 6 BASIC EXERCISES
          <ul>
            <li>REST BETWEEN 1 AND 2 MIN BETWEEN EACH SET</li> 
          </ul>
        </li>
        <li>
          PERFORM AN APPROPRIATE VARIATION FROM THE PLANK PROGRESSION
          <ul>
            <li>START WITH 30S AND BUILD UP TO 1 MIN</li>
          </ul>
        </li>
        <li>FINISH WITH 10 MIN OF STATIC STRETCHING</li>
      </ul>
      <h2>BASIC PRINCIPLES:</h2>
      <ul>
        <li>INCREASE BY NO MORE THAN ONE REP EVERY SESSION.</li>
        <li>WHEN YOU CAN MANAGE 3 SETS OF 8 REPS, MOVE ON TO THE NEXT EXERCISE IN THE PROGRESSION (3 SETS OF 4 REPS)</li>
        <li>ALTERNATE BETWEEN PUSH UPS AND DIPS. DO PUSH UPS ONE SESSION, THEN DIPS IN THE NEXT SESSION</li>
        <li>REFER TO THE WEBSITE FOR A FULL DESCRIPTION OF EACH EXERCISE AND OF THE ANCILLARY PROGRESSIONS</li>
      </ul>
      <Link to="/workout">Workout</Link>
    </>
  )
}

export default IndexPage