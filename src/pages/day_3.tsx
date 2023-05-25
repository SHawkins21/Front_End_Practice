import React from 'react'
import Link from 'next/link'
import {type NextPage} from 'next'
import {linkIcons, links} from "~/constants/constants_link"
import Navigation from '~/component/navigation/Navigation'
import IconNav from '~/component/simple/IconNav'

const Day_3:NextPage = () => {
return (
    <div>
        <h1> Link Components</h1>
        <div>
        {
            links?.map(({text,url,slug},index) => (
                <Navigation key={index} text={text} url={url} slug={slug}/>
            ))
        }


        </div>

        <div>

            {
                linkIcons?.map(({Icon,url,text},index) => (
                    <IconNav key={index} Icon={Icon} url={url} text={text}/>
                ))
            }






        </div>




    </div>




)}

export default Day_3