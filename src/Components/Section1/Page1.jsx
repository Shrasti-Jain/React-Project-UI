import React from 'react'
import Left from './left'
import Ri from './ri'

const Page1 = ({data}) => {
  return (
    <div className='py-10 h-[90vh] flex justify-between items-center px-18 gap-2 '>
      <Left/>
      <Ri data={data}/>
    </div>
  )
}

export default Page1
