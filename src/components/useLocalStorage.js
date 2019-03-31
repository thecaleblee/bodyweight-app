import React, { useState, useEffect } from 'react'

function useLocalStorage(_store, _value) {
  const [inStorage, setInStorage] = useState(
    window.localStorage.getItem(_store) == null
    ? _value
    : window.localStorage.getItem(_store)
  )

  return inStorage
}

export default useLocalStorage