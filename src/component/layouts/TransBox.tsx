import React from 'react'
import {api} from '~/utils/api'
import Transaction from '../navigation/Transaction'



const TransBox = () => {
    const {data:trans} = api.trans.allTransactions.useQuery(undefined)
    return (
    <div>
        {
                trans?.map(({id,amount,name,type}) => (
                    <Transaction key={id} amount={amount.toString()} name={name} type={type}/>
                ))


        }
    

    </div>
  )
}

export default TransBox