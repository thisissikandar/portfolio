import Link from 'next/link'
import React from 'react'

const Navlink = ({href, title}) => {
  return (
    <Link href={href} className='block py-2 pl-3 pr-4 text-gray-400 sm:text-xl md:p-0 rounded hover:text-white'>{title}
    </Link>
  )
}

export default Navlink