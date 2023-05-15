import React from 'react'
import {AiOutlineAudit} from "react-icons/ai"
import {AiOutlineBook} from "react-icons/ai"
import {AiOutlineLinkedin} from "react-icons/ai"
type SidebarProps = {
   title:string
   text:string
   phone:number

}

const Sidebar = ({title, text, phone}:SidebarProps) => {
  return (
    <div className='fixed  bg-slate-200  left-0 top-0 w-[200px] h-full rounded-r-2xl'>

        <div className='text-center text-xl p-5 '>
          Samuel Hawkins
        </div>
        <div className='p-5'>

        <div className='p-4 flex space-x-4'>  
        <AiOutlineAudit className=' text-3xl'></AiOutlineAudit>
        <AiOutlineBook className=' text-3xl' ></AiOutlineBook>
        <AiOutlineLinkedin className=' text-3xl'></AiOutlineLinkedin>
        </div>


        <div>{title}</div>
        <div>{text}</div>
        <div>{phone}</div>
        <div>stuff</div>
        </div>


    </div>
  )
}

export default Sidebar