/* eslint-disable react/no-unescaped-entities */

"use client"

import Image from 'next/image'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Button from '../Button'
import Social from './Social'

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50
  })
  return (
    <div  className='grid w-full h-full px-3 pt-20 mx-auto mx-pt-40 lg:pt-20 max-w-7xl'>
      <div className='grid sm:grid-cols-2 gap-y-12 sm:place-content-center place-items-center'>
        <div className='w-full space-y-4 '>
          <h1 className='text-3xl lg:text-5xl'>Hello</h1>
          <h2 className='text-xl uppercase lg:text-3xl'>I'm Fuseini Abdul Wahab,</h2>
          <h4 className='text-3xl lg:text-4xl'>A <span>{text}</span> <Cursor /></h4>
          <p className='w-full text-xl sm:w-5/6 break-word'>I've designed web applications with user experience at the forefront, ensuring seamless navigation and intuitive interactions</p>
          <div className='flex items-center gap-4'>
          <Button url="/contact" text="Hire Me" />
          <Button url="/about" text="About Me" />
          </div>
        </div>
        <div>
          <Image src="/images/front2.gif" alt="" width={600} height={100}   draggable="false" className='bounce'/>
        </div>
      </div>
      <Social />
    </div>
  )
}

export default Hero