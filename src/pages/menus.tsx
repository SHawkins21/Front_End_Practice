import React from 'react'
import {type NextPage} from 'next'
import {useState} from "react"
import { motion as m, AnimatePresence} from "framer-motion"
import Menu_btn from '~/component/complex/Menu_btn'



const Menus:NextPage = () => {
    const [menu, setMenu] = useState(false)

    const close = ():void => {
        void setMenu(false)
    }

  return (

    <div className='relative h-[100hv]'>Menus
        <div>
            <div>
                <button onClick={() => setMenu(!menu)}> Nav Open </button>
            </div>
            <AnimatePresence>
                { menu && <Menu_btn close={close}/>}

            </AnimatePresence>

        </div>



    </div>
  )
}

export default Menus