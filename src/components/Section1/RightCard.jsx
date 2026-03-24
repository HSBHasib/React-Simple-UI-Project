import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='shrink-0 h-full w-70 rounded-4xl overflow-hidden relative bg-red-300'>
        <img className='h-full w-full object-cover' src={props.img} alt={props.alt} />
        <RightCardContent id={props.id} intro={props.intro} tag={props.tag} />
    </div>
  )
}

export default RightCard
