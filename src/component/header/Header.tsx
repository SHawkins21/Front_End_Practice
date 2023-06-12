import React from 'react'
import {linkIcons, links} from "~/constants/constants_link"
import Navigation from '~/component/navigation/Navigation'
type HeaderProps = {

    tab1:string
    tab2:string
    tab3:string
}

const Header = ({tab1, tab2, tab3,}: HeaderProps) => {
  return (
    <div className='fixed p-4 w-full top-0 left-96 rounded-b-xl bg-slate-200 text-black'>
      <div className='flex space-x-3  text-blue-500 '>
        {
            links?.map(({text,url,},index) => (
                <Navigation key={index} text={text} url={url}  />
            ))
        }
      </div>
    </div>
  )
}

export default Header