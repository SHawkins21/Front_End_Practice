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
      url:"/day_2",
      slug:"day-two"
    },
    {
      text:"Day 3", 
      url:"/day_3",
      slug:"day-three"
    },
    {
      text:"My Work", 
      url:"/my_work",
      slug:"my-work"
    }
  
  ]



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







    