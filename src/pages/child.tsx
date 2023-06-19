import React from 'react'
import {type NextPage} from 'next'
import {useState} from 'react'
import Child from '~/component/complex/Child'
import { AnimatePresence } from 'framer-motion'



const ChildOne:NextPage = () => {

    const [close, setClose] = useState(false)
    const closeChild = ():void => {
            void setClose(!close)
    }
  return (
    
    <div>
        <AnimatePresence>
        {
        close && <Child generic={closeChild}>
            
                <h1 className='text-xl text-slate-600'> this is reusable from child.tsx </h1>
            </Child>
            
        }
        </AnimatePresence>

        <div>
            <button onClick={()=> closeChild()}>Open</button>
        </div>
    </div>
    )}
         
export default ChildOne

