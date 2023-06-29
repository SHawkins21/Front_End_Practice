import React from 'react'
import LongBar from '../complex/LongBar'
import {BsPaypal as PayPal} from 'react-icons/bs'
import { FaBitcoin as Bcoin} from 'react-icons/fa'
import {SiZelle as Zelle} from 'react-icons/si'
import {GiBank as Bank } from 'react-icons/gi'


const BarBox = () => {
  return (
    <div>

            <div>
            <div className='flex-col text-zinc-200 space-y-3'>
            <div className = 'grid grid-cols-2 grid-rows-1 '>
            <div className = 'text-2xl p-4 col-span-1'> Linked Accounts </div>
            
            </div>
            </div>
            </div>


            <div className=' space-y-2'>
            <LongBar Icon={PayPal} title='PayPal' accttype='Checking Account - XXXX' />
            <LongBar Icon={Zelle} title="Zelle" accttype='Savings Account - XXXX'/>
            <LongBar Icon={Bcoin} title="Bitcoin" accttype='Savings Account - XXXX'/>
            <LongBar Icon={Bank} title="Gig Bank" accttype='Checking Account- XXXX'/>
            </div>


    </div>
  )
}

export default BarBox