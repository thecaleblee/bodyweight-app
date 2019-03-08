import React from 'react'

function Button(props) {

  function onButtonClick() {
    props.clickAction(props.clickName)
  }
  
  return (
    <>
    <style>{`
      button {
        padding: 95px 40px;
        font-size: 30px;
        margin-right: 20px;
        cursor: pointer;
        text-transform: uppercase;
      }
      `}</style>
      <button onClick={onButtonClick}>{props.children}</button>
    </>
  )
}

export default Button