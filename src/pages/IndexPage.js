import React from 'react'
import { Link } from 'react-router-dom' 

function IndexPage() {
  return (
    <>
      <h1>Index Page</h1>
      <Link to="/workout">Workout</Link>
    </>
  )
}

export default IndexPage