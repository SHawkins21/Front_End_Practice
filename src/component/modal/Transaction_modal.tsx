import React from 'react'
import { ModalProps } from '~/types/types'



const ModalProps = ({children}: ModalProps) => {
  return (
    <div className=' bg-slate-50 p-6 rounded-xl absolute bottom-[-15px] left-0 right-0 '>{children}</div>
  )
}

export default ModalProps