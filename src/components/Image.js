import React, { useState, useEffect } from 'react'

function Image(props) {
  const [ src, setSrc ] = useState(`/static/${props.url}/${props.id}.jpg`)

  useEffect(() => {
    setSrc(`/static/${props.url}/${props.id}.jpg`)
  }, [props.id])

  return <img src={src} alt={`${props.url} ${props.id}`} />
}

export default Image