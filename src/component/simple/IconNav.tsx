import React from 'react'
import {type LinkIcon} from '~/types/types'
import Link from 'next/link'



const IconNav = ({text,url,Icon}: LinkIcon) => {
  return (
    <div>
        <Link href={`${url}`} aria-label={text}>
        <Icon className='h-6 w-6 text-orange-300' />
        </Link>
        </div>
  )
}

export default IconNav