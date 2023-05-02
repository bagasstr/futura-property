'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import Image from 'next/image'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <div className='lg:py-[.5rem] lg:px-[1rem] fixed top-0 w-full px-[6rem] py-[1rem]'>
        <div className='flex justify-between items-center'>
          <Image src={logo} alt='' width={100} height={100} />

          <nav
            className={` flex list-none gap-x-4 lg:z-20 text-black/70 ${
              menu
                ? 'lg:block lg:absolute lg:bg-slate-500 lg:w-full lg:left-0 lg:top-14 lg:h-screen lg:text-center lg:z-50'
                : 'lg:hidden'
            }`}
          >
            <li className='text-base'>
              <Link href='/'>Home</Link>
            </li>
            <li className='text-base'>
              <Link href='../pages/sell'>Sell</Link>
            </li>
            <li className='text-base'>
              <Link href='../pages/rent'>Rent</Link>
            </li>
            <li className='text-base'>
              <Link href='../pages/new-property'>New Property</Link>
            </li>
            <li className='text-base'>
              <Link href='../pages/directory'>Directory</Link>
            </li>
            <li className='text-base'>
              <Link href='../pages/agent'>Agent</Link>
            </li>
            <li className='text-base'>
              <Link href='../pages/blog'>Blogs</Link>
            </li>
            <li className='text-base'>
              <Link href='/'>More</Link>
            </li>
          </nav>
          <div
            className='hamburger hidden lg:block'
            onClick={() => setMenu(!menu)}
          >
            <FiMenu />
          </div>
        </div>
      </div>
    </>
  )
}
