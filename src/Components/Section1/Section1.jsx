import React from 'react'
import Navbar from './Navbar.jsx'
import Page1 from './Page1.jsx'
const Section1 = (data) => {
  return (
      <div className="section1 h-screen w-full">
             <Navbar/>
             <Page1 data={data}/>
          </div>
  )
}

export default Section1
