import Link from 'next/link'
import React from 'react'

type NavProps = {
    text:string, 
    url:string, 
}

const Navigation = ({text,url}: NavProps) => {
  return (
    <div>
        
        <Link href={`${url}`}>{text}</Link>
    
    </div>
  )
}

export default Navigation