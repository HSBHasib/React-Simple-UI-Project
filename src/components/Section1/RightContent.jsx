import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='rightImgContent' className='h-full md:w-2/3 flex gap-7 overflow-x-auto '>
      {
        props.users.map(function(elem, idx) {
          return <RightCard key={idx} id={idx+1} img={elem.img} alt={elem.alt} intro={elem.intro} tag={elem.tag}  />
        })
      }
    </div>
  )
}

export default RightContent
