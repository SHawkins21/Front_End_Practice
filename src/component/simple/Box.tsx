import React from 'react'

type BoxProps = {
    title:string
    text:string
    num:number



}

const Box = ({title,text,num}: BoxProps) => {
  return (
    <div>
       <h1>{title}</h1>
        <p>{num}</p>
        <p>{text}</p>
       <div>Box</div>
    </div> 
 )
}

export default Box