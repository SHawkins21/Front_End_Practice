import {type NextPage} from 'next'
import React, {useState} from 'react'
import Button from "~/component/simple/Button"
import Box from "~/component/simple/Box"

const Day_count:NextPage = () => {

    const [count, setCount] = useState(false)

  return (
    

        <div className={ count ? "":""}>

            { count ? 
            
            <Box title='Boxy box'/> : <Button title='Green Button' styles="btn_submit"/>

            }


        
        <button className='bg-green-400 p-4' onClick={()=> setCount(!count)}>Click</button>
        </div>
    
  )
}

export default Day_count