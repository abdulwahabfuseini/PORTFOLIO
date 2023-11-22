import Link from 'next/link'
import React from 'react'

const Button = ({url, text}) => {
  return (
    <div>
      <Link href={url}>
        <button className='px-4 py-2 my-5 text-xl text-white bg-blue-700 rounded-lg hover:bg-background hover:scale-95'>{text}</button>
      </Link>
    </div>
  )
}

export default Button