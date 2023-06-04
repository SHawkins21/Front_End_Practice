import { motion as m } from 'framer-motion'
import React from 'react'
import { type Links } from '~/types/types'



type Props = {}

const Button_Hover = ({url, text, slug} :Links) => {
  return (
    <div>
        
        <m.button

        whileHover={ {
            scale:1.5
        }}
        whileTap={{
            rotate:90
        }}
        drag="x"
        dragConstraints={{left:-100, right:100}}


        className='p-4 bg-indigo-600 text-4xl'
        
        
        >{text}</m.button>


    </div>
  )
}

export default Button_Hover