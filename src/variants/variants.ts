

import { type Variants } from "framer-motion";
import { exit } from "process";

export const alertModal:Variants ={ 
    hidden:{
        opacity:0,
        right:"-10" 
        
    }, 
    visible:{
        opacity:1, 
        x:"-500px"
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
