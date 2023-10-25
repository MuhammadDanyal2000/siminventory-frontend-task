import React from 'react'

function Card({ children}: { children: React.ReactNode }) {
  return (
    <div className='p-4 shadow-sm bg-white w-full 138px'>
      {children}
    </div>
  )
}

export default Card
