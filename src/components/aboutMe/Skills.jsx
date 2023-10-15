import { skill } from '@/assets/Data'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div>
      <h1 className='text-2xl sm:text-3xl'>Languages and Tools</h1>
      <div className='flex flex-wrap items-center justify-center gap-2 py-10 sm:justify-start'>
        {
          skill.map(item => (
            <div key={item.id} className='grid p-2 cursor-pointer gap-y-6 place-items-center'>
              <Image src={`/images/${item.icon}`} alt="skill" width={80} height={10} className='object-contain w-14 sm:w-20 h-14'   draggable="false"/>
              <h1 className='sm:text-lg'>{item.title}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills