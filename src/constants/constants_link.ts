import { LinkIcon, Links } from "~/types/types";
import {MdSpaceDashboard, MdShoppingCart} from 'react-icons/md'

export const links:Links[] = [
    {
      text:"Home", 
      url:"/",
      slug:"home-page"
    },
    {
      text:"Day 2", 
      url:"/day-two",
      slug:"day-two"
    },
    {
      text:"Day 3", 
      url:"/day-three",
      slug:"day-three"
    }]



    export const linkIcons:LinkIcon[] = [

      {
        text:"Dashboard", 
        url:"/",
        Icon:MdSpaceDashboard
      },

      {
        text:"Dashboard", 
        url:"/cart",
        Icon:MdShoppingCart
      }



    ]







    