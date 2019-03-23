import React from 'react'

function Header() {

  const User = "Caleb"
  return (
    <>
      <style>{`h1 { position: relative; z-index: 3; }`}</style>
      <h1>Howdy {User}</h1>
    </>
  )
}

export default Header 