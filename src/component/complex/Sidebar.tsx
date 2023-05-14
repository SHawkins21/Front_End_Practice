import React from 'react'

type SidebarProps = {
   title:string
   text:string
    Phone:number

}

const Sidebar = ({title, text, Phone}:SidebarProps) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <p>{Phone}</p>



    </div>
  )
}

export default Sidebar