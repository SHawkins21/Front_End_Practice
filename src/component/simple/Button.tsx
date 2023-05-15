import React from 'react'

type BtnProps = {
    title:string, 
    styles:string, 
    generic:( ) => void 


}

const Button = ({title, styles, generic}: BtnProps) => {
  return (
    <div onClick={()=>generic()}
    className={styles}>
        
       <div>{title}</div>

    </div>
  )
}

export default Button