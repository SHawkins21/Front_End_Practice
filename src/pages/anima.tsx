import React, { useState } from 'react'
import { type NextPage} from 'next'
import { AnimatePresence, easeIn, motion as m } from 'framer-motion'



const Anima:NextPage = () => {
    const [box, setBox] = useState(false)
  return (
    <div className=' relative'>
        <button onClick={()=> setBox(!box)}>
            {box ? "OFF":"ON"}
       </button>
       <AnimatePresence>
        {
            box && 

            <m.div
                key="box"
                initial={{
                    right:0, 
                    opacity:0
                }}
                animate={{
                    right:20,
                    opacity:1
                    
                }}
                exit={{
                    right:0,
                    opacity:0
                }}
                
                
                className='absolute bg-sky-300 w-16 h-16 rounded-lg'
                
                >
            </m.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default Anima