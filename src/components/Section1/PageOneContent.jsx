import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageOneContent = (props) => {
  return (
    <div className='sm:flex items-center py-4 md:px-12 px-4 h-[84vh] md:gap-8 max-[500px]:space-y-8' >
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default PageOneContent
