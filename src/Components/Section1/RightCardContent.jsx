import React from 'react'

const RightCardContent = ({elem,id}) => {
  console.log(elem.color);
  
  return (
    <>
       <img className='h-full w-full object-cover' src={elem.img} alt="" />
      <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
        <h2 className='rounded-full bg-white h-12 w-12 flex items-center justify-center font-bold text-2xl '>{id}</h2>
        <div>
            <p className='text-lg leading-relaxed text-white mb-14 '>{elem.intro}</p>
            <div className='flex justify-between'>
              <button style={{backgroundColor:elem.color}} className=' text-white font-medium px-7 py-2 rounded-full text-lg '>{elem.tag}</button>
            <button style={{backgroundColor:elem.color}} className=' text-white font-medium px-4 py-2 rounded-full text-lg'><i className="ri-arrow-right-line"></i></button></div>
            </div>

      </div>
    </>
  )
}

export default RightCardContent
