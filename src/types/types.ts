import { type IconBaseProps, type IconType } from "react-icons"
import {type ComponentType } from "react"


export type Links = {
    text:string, 
    url:string, 
    slug:string
}

export type LinkIcon = {
    text:string, 
    url:string, 
    Icon:ComponentType<IconBaseProps>


}

