import { motion as m } from 'framer-motion'
import React from 'react'
import { type Links } from '~/types/types'




const Button_Hover = ({url, text, slug} :Links) => {
 

  return (
    <div>
        
        <m.button

        //  initial={{ '--rotate': '0deg' } as any}
        //  animate={{ '--rotate': '360deg' } as any}
        //  transition={{ duration: 2, repeat: Infinity }}

// animate={{
//   x: 0,
//   backgroundColor: "#000",
//   boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
//   position: "fixed",
//   transitionEnd: {
//     display: "none",
//   },
// }}

          // animate={{ rotate: 360}}
          // transition={{ type: "inertia", velocity: 300 }}



      //  animate={{ rotate: 180 }}
      // transition={{ type: 'spring', restSpeed: 0.5 }}

        //  animate={{ opacity: 0 }}
        //  transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}

        // animate={{ rotate: 180 }}
        // transition={{ from: 90, duration: 2 }}

        // transition={{
        //   ease: "linear",
        //   duration: 2,
        //   x: { duration: 1 }
        // }}



        //  animate={{ x: 300 }}
        //  transition={{ type: "spring", stiffness: 1000 }}
         

        // whileHover={ {
        //     scale:1.5
        // }}
        // whileTap={{
        //     rotate:90
        // }}

        drag="x"
        dragConstraints={{left:-300, right:300}}
        dragMomentum={true}


        className='p-4 bg-indigo-600 text-4xl'
        
        
        > Hover ME
        {/* <li style={{ transform: 'rotate(var(--rotate))' }} />
        <li style={{ transform: 'rotate(var(--rotate))' }} />
        <li style={{ transform: 'rotate(var(--rotate))' }} /> */}
        </m.button>


    </div>
  )
}

export default Button_Hover