import React from 'react'

type HeaderProps = {

    tab1:string
    tab2:string
    tab3:string
}

const Header = ({tab1, tab2, tab3,}: HeaderProps) => {
  return (
    <div className='flex bg-slate-400 text-black'>
    <div>{tab1}</div>
    <div>{tab2}</div>
    <div>{tab3}</div>
    </div>
  )
}

export default Header