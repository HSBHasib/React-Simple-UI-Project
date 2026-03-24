import React from 'react'
import Section1 from './components/Section1/Section1'


const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1601762922947-ca70aeba0055?q=80&w=460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      alt: 'img4',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe in quia earum iure alias inventore Saepe in quia earum iure',
      tag: 'Satisfied'
    },

    {
      img: 'https://plus.unsplash.com/premium_photo-1731430642190-a8d9e20565ae?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      alt: 'img1',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe in quia earum iure alias inventore Saepe in quia earum iure',
      tag: 'Satisfied'
    },

    {
      img: 'https://plus.unsplash.com/premium_photo-1674069719667-52be9052202a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      alt: 'img3',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe in quia earum iure alias inventore Saepe in quia earum iure',
      tag: 'Underbanked'
    },

    {
      img: 'https://plus.unsplash.com/premium_photo-1661750093594-797841a8217d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      alt: 'img2',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe in quia earum iure alias inventore Saepe in quia earum iure',
      tag: 'Underserved'
    }
  ]

  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App
