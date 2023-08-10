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
    number:string | undefined
    
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
    amount:string, 
    type:boolean, 
}

export type ModalProps = {
   
    children:ReactNode
    }

export type Alerts = {
    text:string,
    icon:IconBaseProps, 
}

export type Modal = {
    key:string
    close:() => void
    children:ReactNode
}
export type BtnGeneric ={ 
    generic:() => void 
}