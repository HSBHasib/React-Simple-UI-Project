import React from 'react'
import SectionOneNavber from './SectionOneNavber'
import PageOneContent from './PageOneContent'

const Section1 = (props) => {
  return (
    <div>
      <SectionOneNavber />
      <PageOneContent users={props.users} />
    </div>
  )
}

export default Section1

