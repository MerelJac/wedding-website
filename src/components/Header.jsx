import React from 'react'
import FlipClock from './FlipClock'

function Header() {
  return (
    <div className="flex flex-col items-center justify-center mb-[50vh] pt-[50vh]">
      <h1 className='text-white'>Matthew & Merel</h1>
      <FlipClock></FlipClock>
    </div>
  )
}

export default Header
