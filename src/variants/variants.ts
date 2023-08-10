

import { animate, type Variants } from "framer-motion";
import { exit } from "process";

export const alertModal:Variants ={ 
   initial:{
    opacity:0, 
    right:0
   },
   animate:{ 
    opacity:1,
    right:20,
    scale:1,
   
    transition:{
        duration:0.3,
        ease:"easeOut"
    }, 
   }, 
    exit:{
        opacity:0, 
        right:0, 
        transition:{duration:0.2, ease:"easeOut"}
    }
}




// don't use duration with spring  
export const boxVarients:Variants ={ 
    hidden:{
        x:"-500Px"
    },
    visible:{
        x:"0px"
    }
}
export const boxVarients1:Variants ={
    
    hidden:{
        y:"500Px"
    },
    visible:{
        y:"0px"
    }
}
export const boxVarients2:Variants ={ 
    hidden:{
        y:"-500Px"
    },
    visible:{
        y:"0px"
    }
}
