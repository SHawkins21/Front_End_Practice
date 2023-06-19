import { AnimatePresence } from 'framer-motion'
import { type NextPage } from 'next'
import React from 'react'
import Child from '~/component/complex/Child'
import { useState } from 'react'


const LoginPage:NextPage = () => {

    const [form, setForm] = useState(false)

    const toggleLogin = ():void => {
        void setForm(!form)
    }
  return (
    
        
        <div className='min-h-screen flex justify-center item-center'>
            <AnimatePresence>
            {
                form && 

            <Child generic={toggleLogin}>

                
               <h1 className='mb-4'>
                  Login
                </h1>

           
                 <div>
                 <input type="text" className='p-4 border rounded-lg' placeholder='UserName'>
            
                 </input>
                 <input type="text" className='p-4 border rounded-lg mt-2' placeholder='Password'>
            
                 </input>
                </div>
             
             

            
            </Child> }
            
            </AnimatePresence>

                <div>
                    <button onClick={()=> toggleLogin()} > Login </button>
                </div>



</div>
  )
}

export default LoginPage