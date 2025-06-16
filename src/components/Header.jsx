import React from 'react'
import FlipClock from './FlipClock'

function Header() {
  return (
    <div className="flex flex-col items-center justify-center my-[12rem]">
      <h1>Matthew & Merel</h1>
      <FlipClock></FlipClock>
    </div>
  )
}

export default Header
