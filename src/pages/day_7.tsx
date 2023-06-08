
import React from 'react'
import {type NextPage} from 'next'
import { useState } from 'react'
import {motion as m, AnimatePresence} from 'framer-motion'

const Drawer:NextPage = () => {


const [drawer, setDrawer] = useState(false)
  return (
    <div>
        <div className='min-h-screen flex justify-center items-center '>
            <div >
            <AnimatePresence>
                {drawer &&

        <m.div 
        initial={{
            opacity:0, 
            y:20
        }}
        animate={{
            opacity:1, 
            y:0
        }}
        transition={{
            type:'tween',
            duration:0.5,
            ease:'easeInOut' 

        }}
        exit={{
            opacity:0, 
            y:20
        }}
        
        
        
        className='bg-slate-50 p-4 rounded-md w-[600px]'>


            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Optio natus nisi, aspernatur fugit praesentium doloribus possimus. 
            Quos vitae exercitationem, ipsam eos, consequatur voluptates sunt 
            impedit ipsa tenetur placeat, eius debitis!
           </p>
        </m.div> }
        </AnimatePresence>
        </div>
        
        <button onClick={() => setDrawer(!drawer)}>Toggle</button>
        
    </div>
    </div>
  )
}

export default Drawer