import React from 'react'
import Menu from './Menu';
import Image from 'next/image'

export default function Navbar() {

    
  return (
    <div className=''>

        <div className='flex justify-center align-center items-center'>
            <div className='flex justify-center p-5'>
                {/*Logo */}
                <Image width={400} height={40} src="/shoppingListLogo.png" alt="image" />
            </div>
            <div className='flex justify-end'>
                {/*Menu */}
                <Menu />
            </div>
        </div>
    </div>
  )
}
