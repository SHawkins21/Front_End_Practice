import {motion as m,  AnimatePresence } from "framer-motion"
import { atom, useAtom } from "jotai"
import { type NextPage } from "next"
import ErrorModal from "~/component/modal/Errormodal"
import { alertModal } from "~/component/state/modal"
import { type Variants } from "framer-motion";


const Alerts:NextPage = () => {

    const [alert,setAlert] =useAtom(alertModal)


  const close = ():void => {
    void setAlert(!alert)
  }
  
  
    return (
    <div className="relative flex 
    justify-center items-center h-screen">
        <div>
            <button onClick={()=> close()} className="flex justify-center items-center bg-red-500 h-6 w-6 p-4
            rounded-full text-zinc-50">E</button>
        </div>



    {
      alert && 
    <AnimatePresence>  
        
    <ErrorModal close={close}>

        <div className=" text-zinc-50">Server Error!</div>

    </ErrorModal>
    
    </AnimatePresence>      
    }
    
    </div>
  )
}

export default Alerts