import { motion as m} from 'framer-motion'
import React from 'react'


type Props = {
    close:() => void 
}

const Menu_btn = ({close}:Props) => {
  return (
    <div className='absolute top-0 left-0 '>
    <m.div 
    initial={{
        x:'-80vw', 
        opacity:0, 

    }}
    animate={{
        x:0,
        opacity:1
    }}
    exit={{
        x:'-80vw',
        opacity:0, 
    }}
    transition={{
        type:'tween',
        duration:1,  
        ease:'easeInOut'

    }}
    
    
    
    className=' bg-orange-300 p-6 w-80 h-[100vh]'>
        <h1 className='text-4xl'>Menu</h1>
        <ul >
            <li>Home</li>
            <li>About</li>
             <li>Settings</li>
        </ul>
        <button onClick={ ()=> close()}>X</button>

    </m.div>
    </div>
  )
}

export default Menu_btn