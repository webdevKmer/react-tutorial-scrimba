import React from 'react'
import MemeForm from './MemeForm'
import MemeCard from './MemeCard'

function MainComponent() {
  return (
    <div className="main">        
        <MemeForm />
        <MemeCard />
    </div>
  )
}

export default MainComponent