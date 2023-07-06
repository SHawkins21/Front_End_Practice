import { type IconBaseProps, type IconType } from "react-icons"
import {ReactNode, type ComponentType } from "react"
import { type Variants } from "framer-motion"


export type Links = {
    text:string, 
    url:string, 
    
}

export type GridBoxProps = {
    Icon:ComponentType<IconBaseProps>
    Icon1:ComponentType<IconBaseProps>
    title:string, 
    number:number | undefined
    
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
   
    animation:Variants
    Icon:ComponentType<IconBaseProps>

    children:ReactNode
    generic:() => void 
}
export type Icons = {
  
    Icon:ComponentType<IconBaseProps>
}
export type LinkedAccount={
    title:string
    accttype:string
    Icon:ComponentType<IconBaseProps>
}
export type TransactionProps = {
    name:string
    amount:number, 
    type:boolean, 
}