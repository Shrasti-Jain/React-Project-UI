import React from 'react'
import Lefttext from './Lefttext'
import LeftArrow from './LeftArrow'

const Left = () => {
  return (
    <div className='flex justify-between flex-col  h-full w-1/3  '>
     
      <Lefttext></Lefttext>
      <LeftArrow></LeftArrow>
    </div>
  )
}

export default Left
