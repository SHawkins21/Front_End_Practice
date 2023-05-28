import React from 'react'
import {type NextPage} from "next"
import Button from '~/component/simple/Button'
import Search from '~/component/complex/Search'
import { useState } from "react"
import Header from '~/component/header/Header'



const Day_2:NextPage = () => {

    const [search, setSearch] = useState<string>("")

    const learnMore = ():void => {
        void console.log("learn More About Us"); 
    }
    const submitForm = ():void => {
        void console.log("Submit a Form! "); 
    }

    const onChangeSearch = (data:string):void => {
        setSearch(data)
        void console.log("State" + data);



    }

    const searchForm = ():void => {
        void console.log("search a Form! "); 

        const data = { 
            search, 
            id:10, 
        }
            console.log(data); 
    }

  return (
    <div> 
    <Header/>
    <div className='bg-sky-300 h-screen flex justify-center
    items-center text-[2rem] '>

    <div className='flex gap-2'>
    
     
     <Search 
     generic={searchForm}
     onChangeGeneric={onChangeSearch}
     text='Search'
     btntitle='GO!'
     
     
     />    
    {/* <Button generic={learnMore} title="Learn More" styles='btn_learn'/>
    <Button generic={submitForm} title="Learn More" styles='btn_submit'/> */}
    </div>
    <div></div>


    </div>
    </div>
  )
}

export default Day_2