import React, { ReactNode } from 'react'
import {motion as m } from "framer-motion"; 




type Props = {
    children:ReactNode, 
    generic:() => void
}

const Child = ({children, generic}: Props) => {
  return (

    <m.div
    initial={{opacity:0,
    y:100}}
    animate={{
        opacity:1, 
        y:0 
    }}
    exit={{
        opacity:0,
        y:100
    }}
    
    
    
    
    >
    <div className="bg-slate-100 p-6 min-w-[320px] max-w-[420px]  rounded-xl">
        <h1>My Model is reusable -- from Layout </h1>
        {children}
        <button onClick={() => generic()}>Close</button>
    </div>
    </m.div>
  )
}

export default Child