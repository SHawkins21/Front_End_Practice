import {type NextPage} from 'next'
import React from 'react'
import Boxanimation from '~/component/animations/Box_animation'
import {AiFillAlert} from "react-icons/ai";
import {BiBath} from "react-icons/bi"
import { motion as m } from 'framer-motion';
import Button from '~/component/simple/Button';
import Button_Hover from '~/component/complex/Button_Hover';



const day_5:NextPage = () => {
  return (
    <div className='bg-slate-300'>
        <h1 className='text-4xl'>Day_5</h1>
        <div className='min-h-screen flex justify-center items-center'>
            {/* <m.div
            animate={{
                "x":100,
                "y":100,
                "rotate":180, 
            }}
            
            
            
            >
            <Boxanimation text='icon' url='/' Icon={AiFillAlert}/>
            </m.div> */}

            {/* <m.div
            animate={{
                "y":-100,
                "scale":1.8,  

            }}
            
            >

            <Boxanimation text='icon2' url='/' Icon={BiBath}/>

            </m.div> */}


                <div>
                    <Button_Hover text='Hover Me' url="/" slug='hover-me'/>
                </div>


        </div>
    </div>
  )
}

export default day_5