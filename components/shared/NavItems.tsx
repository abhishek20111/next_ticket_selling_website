"use client"

import React from 'react'
import { headerLinks } from '@/constants'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

function NavItems() {
    const pahtname = usePathname();
  return (
    <ul className='md:flex-between flex w-full flex-col items-start md:flex-row'>
      {headerLinks.map((link)=>{
        const isActive = pahtname === link.route;
        return(
            <li key={link.route} 
            className={`${isActive && 'text-primary-500'} flex-centre p-medium-16 whitespace-nowrap`}>
                <Link href={link.route}>{link.label}</Link>
            </li>
        )
      })}
    </ul>
  )
}

export default NavItems
