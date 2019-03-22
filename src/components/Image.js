import React, { useState } from 'react'

function Image(props) {
  const [ src, setSrc ] = useState(`/static/${props.url}/${props.id}.jpg`)

  return <img src={src} alt={`${props.url} ${props.id}`} />
}

export default Image