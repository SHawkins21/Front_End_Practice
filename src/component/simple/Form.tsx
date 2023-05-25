import React from 'react'
import {useState} from 'react'
import {api} from "~/utils/api"; 


interface ContactProps {

    name:string
    email:string
    message:string
    contact:boolean


}

const Form = () => {

    const mutation =api.contact.create.useMutation({
        onSuccess: () => {
            void console.log('Run_Successful')
        }
    })

    const [name, setName] = useState<string>("")
    const [email, setEmail] =useState<string>("")
    const [message, setMessage] =useState<string>("")
    
    
    
    
    const tagFromData = ()







  return (
    <div>
        <form>






        </form>
    </div>
  )
}

export default Form