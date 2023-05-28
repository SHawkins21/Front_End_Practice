import React from 'react'
import Link from 'next/link'
import {type NextPage} from 'next'
import {linkIcons, links} from "~/constants/constants_link"
import Navigation from '~/component/navigation/Navigation'
import IconNav from '~/component/simple/IconNav'
import Header from '~/component/header/Header'

const Day_3:NextPage = () => {
return (
    <div>
        <h1> Link Components</h1>
        <div>
        <Header/>
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