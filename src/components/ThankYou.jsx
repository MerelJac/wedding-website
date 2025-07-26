import React from 'react'
import headshot from "../assets/headshot.png"
function ThankYou() {
  return (
    <div className=" bg-[url('./assets/hands.png')] bg-cover bg-center bg-no-repeat bg-fixed shadow-lg px-10 py-12  min-h-[80vh]">
      Thanks for celebrating with us! 
      <img src={headshot}>
      </img>
    </div>
  )
}

export default ThankYou
