import React from 'react'
import RiCard from './RiCard'

const Ri = ({data}) => {
  return (
    <div className='h-full w-2/3 p-6 flex flex-nowrap gap-5 overflow-x-auto scrollbar'>
     {
       data.data.map((elem,index)=>{return <RiCard elem={elem} id={index+1}></RiCard>})
       
     }
    </div>
  )
}

export default Ri
