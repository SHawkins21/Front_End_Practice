import React from 'react'
import {type LinkIcon} from '~/types/types'



const IconNav = ({text,url,Icon}: LinkIcon) => {
  return (
    <div><Icon className='h-6 w-6 text-orange-300' /></div>
  )
}

export default IconNav