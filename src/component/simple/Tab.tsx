import React from 'react'

type TabProps = {
    tabtitle:string
    text:string 
    tablink:string
}

const Tab = ({tabtitle, tablink, text}: TabProps) => {
  return (
    <div className='fixed bg-gray-200
                    rounded-2xl
                    w-full      
                    h-full
                    left-96
                    top-40'>
    <h1 className='text-2xl p-4'>{tabtitle}</h1>               
    <div className='flex p-4'>
    <div>{tablink}</div>
   
    <div>{text}</div>     
    </div>


    
    
    </div>
  )
}

export default Tab