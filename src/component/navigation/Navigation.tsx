import Link from 'next/link'
import React from 'react'
import { type Links } from "~/types/types" 



const Navigation = ({text,url,slug}: Links) => {
  return (
    <div>
        
        <Link href={`${url}`}>{text}<span>{slug}</span></Link>
        
    </div>
  )
}

export default Navigation