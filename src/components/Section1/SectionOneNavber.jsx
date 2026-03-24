import React from 'react'

const SectionOneNavber = () => {
  return (
    <div className='md:flex items-center md:justify-between py-6 px-12 space-y-4 max-[500px]:text-center'>
        <h4 className='bg-black text-white uppercase px-6 py-2 rounded-md cursor-pointer'>
            Target Audience
        </h4>
        <button className='bg-gray-200 px-6 py-2 uppercase rounded-full text-sm tracking-widest cursor-pointer'>
            Digital Banking Platform
        </button>
    </div>
  )
}

export default SectionOneNavber
