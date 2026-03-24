import React from 'react'
import { ArrowDownRight } from 'lucide-react';

const LeftContent = () => {
  return (
    <div className='md:h-full md:w-1/3 md:flex md:flex-col md:justify-between max-[500px]:space-y-8 max-[500px]:h-fit'>
        <div className="space-y-5">
            <h1 className="text-[55px] font-semibold leading-none tracking-tight text-black">
                Prospective <br /> 
                Customer <br /> 
                segmentation
            </h1>

            <p className="text-[16px] text-gray-500 leading-5.5 md:max-w-75">
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Alias doloremque perspiciatis 
                cumque, eveniet recusandae a laborum vero! 
                Aperiam, at culpa.
            </p>
        </div>

        <div className="flex items-end flex-1">
            <div className="-rotate-90 origin-bottom-left translate-x-full ">
                <ArrowDownRight size={70} strokeWidth={1.5} />
            </div>
        </div>
    </div>
  )
}

export default LeftContent
