import { motion as m } from "framer-motion"
import { type Modal } from "~/types/types"
import { alertModal,  } from "~/variants/variants"


const variants = {
    open: {opacity: 1, x:0},
    closed: {opacity: 0, x: "-100%"}
}

const ErrorModal = ({children,close}:Modal) => {
    return(
      <m.div 
      variants={alertModal}
      initial="hidden"
      
    animate="100px"
    //   exit="spring"
      className="absolute top-5 right-5
       bg-secondary-color rounded-3xl p-5
       ">  
        <div onClick={()=> close()} className=" text-red-500 cursor-pointer">X</div>
        {children}
    </m.div>
    )
}

export default ErrorModal