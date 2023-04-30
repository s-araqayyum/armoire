import React from "react";
import fourofour from './images/404.png'

function goBack(){
	window.location = '/'
}

const DeleteProduct = () => {
  
  return (
    <div>
		  <button className = "button" onClick={goBack}> Return to Home </button>
      <br></br>
      <br></br>
      <img src={fourofour}
      width="500" 
      height="500"></img>
      <h1>Deleted Successfully</h1>
    </div>
  )
}

export default DeleteProduct