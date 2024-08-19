import Image from 'next/image'
import React from 'react'

const NotFound = () => {
  return (
    <div className='bg-white dark:bg-black h-screen flex flex-col gap-12 justify-center items-center duration-300'>
      <Image src='notfound.svg' alt='not found' width={400} height={400}/>
      <h1 className='text-3xl font-bold text-center dark:text-white'>Page Not Found</h1>
    </div>
  )
}

export default NotFound
