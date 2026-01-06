import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {
 const data = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1661475861393-7b2561865338?q=80&w=687&auto=format&fit=crop',
    intro: 'Working life teaches discipline, teamwork, patience, accountability, and resilience through daily challenges and consistent responsibilities.',
    tag: 'Satisfied',
    color: '#22c55e' // emerald green
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661716977358-ce99db9ca6d0?q=80&w=687&auto=format&fit=crop',
    intro: 'Professional growth requires learning continuously, managing time effectively, communicating clearly, adapting quickly, and accepting feedback.',
    tag: 'Underserved',
    color: '#f59e0b' // amber gold
  },
  {
    img: 'https://images.unsplash.com/photo-1734767461935-aa2be20f7599?q=80&w=687&auto=format&fit=crop',
    intro: 'Balancing ambition with wellbeing helps employees sustain motivation, maintain health, build careers, and find satisfaction.',
    tag: 'Underbanked',
    color: '#6366f1' // indigo
  },
  {
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    intro: 'Team collaboration encourages creativity, problem-solving, trust, and stronger workplace relationships.',
    tag: 'Growing',
    color: '#ec4899' // premium pink
  },
  {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    intro: 'Modern workplaces value adaptability, innovation, and continuous improvement in daily operations.',
    tag: 'Evolving',
    color: '#0ea5e9' // sky blue
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661645312997-53c1204fae36?q=80&w=687&auto=format&fit=crop',
    intro: 'Positive work culture increases employee engagement, satisfaction, productivity, and retention.',
    tag: 'Engaged',
    color: '#a855f7' // royal purple
  }
];

  
  return (
    <div>
     <Section1 data={data}/>

     <Section2/>
    </div>
  )
}

export default App
