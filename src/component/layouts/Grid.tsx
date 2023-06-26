import React from 'react'
import GridBox from './GridBox'
import {GoCreditCard as card} from "react-icons/go"

import {GrMoreVertical as more} from "react-icons/gr"
import {CiWallet as wallet} from "react-icons/ci"


const Grid = () => {
  return (
           <div className='
            grid grid-cols-2 gap-2 text-zinc-200'>
            <GridBox title='Checking Account' number='253.89' Icon={wallet} Icon1={more}/>
            <GridBox title='Saving Account' number='100,000.00' Icon={card} Icon1={more}/>
            </div>


  )
}

export default Grid