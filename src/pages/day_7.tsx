
import React from 'react'
import {type NextPage} from 'next'
import { useState } from 'react'
import {motion as m, AnimatePresence} from 'framer-motion'
import Child from '~/component/complex/Child'
const Drawer:NextPage = () => {


const [drawer, setDrawer] = useState(false)
const toggleModal = ():void => {
     void setDrawer(!drawer)
}
  return (
    <div>
        <div className='min-h-screen flex justify-center items-center '>
            <div >
            <AnimatePresence>
                {drawer &&
                 

        <Child generic={toggleModal}>

            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Optio natus nisi, aspernatur fugit praesentium doloribus possimus. 
            Quos vitae exercitationem, ipsam eos, consequatur voluptates sunt 
            impedit ipsa tenetur placeat, eius debitis!
            </p>


        </Child>
       }
            
       </AnimatePresence> 

        
        </div>
        
        <button onClick={() => setDrawer(!drawer)}>Toggle</button>
        
    </div>
    </div>
  )
}

export default Drawer