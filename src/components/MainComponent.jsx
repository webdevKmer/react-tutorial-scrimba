import React from 'react'
import BoxGrid from './BoxGrid'
import NewsletterForm from './NewsletterForm'
import StarWarsApi from './StarWarsApi'
import WindowTracker from './WindowTracker'

function MainComponent() {
  return (
    <div className="main">
      <WindowTracker />
      <StarWarsApi />
      <NewsletterForm />
      <BoxGrid darkMode={true} />
    </div>
  )
}

export default MainComponent