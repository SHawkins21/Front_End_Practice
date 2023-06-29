import React from 'react'
import { NextPage } from 'next'
import Grid from '~/component/layouts/Grid'
import Icons from '~/component/simple/Icon'
import {IoMdWifi} from "react-icons/io"
import {FcSimCardChip as Chip} from "react-icons/fc"

import LongBar from '~/component/complex/LongBar'
import GridBox from '~/component/layouts/GridBox'
import BarBox from '~/component/layouts/BarBox'
import MobileMenu from '~/component/button/MobileMenu'


const Layouts:NextPage = () => {
  return (
    <main className='min-h-screen p-4 flex justify-center
                   bg-slate-900 '>
        {/* Start Wallet/ Pocket that the Card rests in */}
        <div className='w-[400px]'>
        <div className='h-80 mb-2 rounded-3xl px-8 max-w-[500px]
                       bg-primary-color '>
          <div className='flex justify-between items-center pt-8 pb-4'>
              <h1 className='text-zinc-200 '>Wallet</h1>
              <p className='text-zinc-300 text-sm'>Arrive by September 10th</p>
          </div>
          {/* End Wallet/ Pocket that the Card rests in */}
          {/* Start Credit Card */}
          <div>
            <div className='  h-[220px] rounded-3xl 
                           bg-gradient-to-r from-third-color from-20% via-primary-color via-40% to-secondary-color to-60%'>
              <div className='flex justify-between items-center px-6 py-2
                            text-zinc-300'>
                  <h1 className='text-2xl'>Visa</h1>
                  <Icons Icon={IoMdWifi}/>
              </div>
              <div className='px-6 pt-6 '>
                <Chip className="h-8 w-8"/>
                
              </div>
              {/* Card Numbers Name and Details */}
              <div className='text-zinc-300'>
              <div className='grid grid-cols-4 justify-items-center pt-4'>
                <p>0000</p>
                <p>0000</p>
                <p>0000</p>
                <p>0000</p>
              </div>
              
              <div className='grid grid-cols-2 justify-between justify-items-center pt-9
                              '>
                  <p>Jane Doe</p>
                  <p>Card Details</p>
              </div>
             

              
             </div>

          </div>
          </div>

        </div>
        {/* Start Credit Card */}
        {/* Section Two Boxes "checking account Balance Forward " */}
        {/* https://dribbble.com/shots/20848600-debt-payoff-app */}

           

            {/* Start Grid Square */}
            <Grid/>
            {/* End  Grid Square */}
            {/* Start Long Cross Bars */}
            
            <BarBox/>

            {/* End Long Cross Bars  */}
            {/* Start Bottom Menu */}

            <div className=''>

            <MobileMenu/>

              
            </div>

            {/* End Bottom Menu*/}



          


     





        </div>
          


    </main>
  )
}

export default Layouts