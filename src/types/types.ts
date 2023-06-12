import { type IconBaseProps, type IconType } from "react-icons"
import {type ComponentType } from "react"
import { type Variants } from "framer-motion"


export type Links = {
    text:string, 
    url:string, 
    
}

export type LinkIcon = {
    text:string, 
    url:string, 
    Icon:ComponentType<IconBaseProps>


}
export type Box ={
    title:string,
    
    animation:Variants
    Icon:ComponentType<IconBaseProps>
}
export type NavButton ={ 
    title:string, 
    animation:Variants
    Icon:ComponentType<IconBaseProps>
}
