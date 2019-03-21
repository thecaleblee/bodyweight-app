import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

function MovePicker() {
  const data = useStaticQuery(graphql`
    query GetExcersizes {
      excersizesJson {
        name
        versions {
          name
          file
        }
      } 
    } 
  `)

  return (
    <>
      <h1>{data.excersizesJson.name}</h1>
      {data.excersizesJson.versions.map(move =>
        <h2>{move.name}</h2>
      )}
    </>
    
  )
}

export default MovePicker