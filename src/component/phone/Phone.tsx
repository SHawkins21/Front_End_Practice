import React from 'react'

type PhoneProps = {

    phone:number
    call:string


}

const Phone = ({phone, call}: PhoneProps) => {
  
    let number = 0
    
    
    switch (call) {
        case call:"Call Dad's Work"
            
            number = phone
            
            break;

        case call:"Call Dad Home"

            number = phone
            
            break;
    
        default:
            break;
    }
  
  
    return (



        <div>

    <div>{number}</div>

       </div>

  )
}

export default Phone