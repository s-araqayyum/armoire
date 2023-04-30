import React from 'react'
import updating from './images/updating.png'

function goBack(){
	window.location = '/'
}

export default function EditProduct() {
  return (
    <div>
      <button className = "button" onClick={goBack}> Return to Home </button>
      <br></br>
      <br></br>
      <img src={updating}
      width="500" 
      height="500"></img>
      <h1>Edited Successfully</h1>
    </div>
  )
}
