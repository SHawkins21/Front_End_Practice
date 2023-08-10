import { motion as m } from "framer-motion"
import { type Modal } from "~/types/types"
import { alertModal,  } from "~/variants/variants"



const ErrorModal = ({children,close, key}:Modal) => {
    return(
      <m.div 
      
      key="modal"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={alertModal}
      

      className=" absolute
       bg-secondary-color rounded-3xl p-5
       ">  
        <div onClick={()=> close()} className=" text-red-500 cursor-pointer">X</div>
        {children}
    </m.div>
    )
}

export default ErrorModal