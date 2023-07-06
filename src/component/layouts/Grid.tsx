import React from 'react'
import GridBox from './GridBox'
import {GoCreditCard as card} from "react-icons/go"
import {api} from "~/utils/api"
import {GrMoreVertical as more} from "react-icons/gr"
import {CiWallet as wallet} from "react-icons/ci"



const Grid = () => {



  const {data:total} = api.trans.totalAgg.useQuery(undefined)
  const sum = total?._sum.amount?.toFixed(2)
  const avg = total?._avg.amount?.toFixed(2)
  

  return (
           <div className='
            grid grid-cols-2 gap-2 text-zinc-200'>
            <GridBox title='Checking Account' number={sum} Icon={wallet} Icon1={more}/>
            <GridBox title='Daily Average' number={avg} Icon={card} Icon1={more}/>
            
            {/* trans?.map(({name,amount,type,id})=>(

              
              <li key={id}>{name}</li>


            )) */}
            
           

          </div>
  )
}

export default Grid