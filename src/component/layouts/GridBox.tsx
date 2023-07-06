import React from 'react'
import { api } from "~/utils/api"
import { GridBoxProps } from '~/types/types'
import Transaction from '../navigation/Transaction'



const GridBox = ({Icon,Icon1,title,number}:GridBoxProps) => {

let fnum:number = parseFloat(number)


  return (
    <div>
        
        <div className='rounded-3xl bg-primary-color px-8 py-6'>
            <div className='flex justify-between items-center pb-4'>
            <Icon className='h-6 w-6 text-zinc-300'/> 
            <Icon1 className='h-6 w-6 text-zinc-300'/>
            </div>
            <p>{title}</p>             
        <h3 className='text-xl'>${number}</h3> 
        
    </div>
    </div>
  )
}

export default GridBox