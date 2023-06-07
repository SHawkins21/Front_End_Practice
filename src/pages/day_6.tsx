import React from 'react'
import {type NextPage} from 'next'
import { boxVarients, boxVarients1, boxVarients2 } from '~/variants/variants'
import Boxs from '~/component/animations/Boxs'

const Day_6 = () => {
  return (


    <div className='min-h-screen flex justify-center items-center space-x-4'>
    
    <Boxs text='50' animation={boxVarients}/>
    <Boxs text='50' animation={boxVarients2}/>
    <Boxs text='50' animation={boxVarients1}/>
    
    </div>
  )
}

export default Day_6