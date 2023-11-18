import React from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-red-500 text-white p-3 uppercase font-bold mb-3 rounded text-center'>
    {children}
  </div>
  )
}

export default Error