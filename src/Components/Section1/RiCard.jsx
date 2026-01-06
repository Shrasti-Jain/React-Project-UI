import React from 'react'
import RightCardContent from './RightCardContent'

const RiCard = ({elem,id}) => {
  return (
    <div className='h-full w-80  rounded-4xl relative overflow-hidden shrink-0 '>
     <RightCardContent elem={elem} id={id}></RightCardContent>
  
    </div>
  )
}

export default RiCard
