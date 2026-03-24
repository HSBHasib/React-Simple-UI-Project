const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-4 '>
            <h2 className='h-7 w-7 flex justify-center items-center rounded-full font-semibold bg-gray-200'>{props.id}</h2>
            
            <div className='space-y-12'>
                <p className='leading-6 text-white'>
                    {props.intro} 
                </p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-6 py-1 rounded-full cursor-pointer hover:bg-blue-700'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-blue-700'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent
