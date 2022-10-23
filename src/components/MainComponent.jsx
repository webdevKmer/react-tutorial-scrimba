import React from 'react'
import BoxGrid from './BoxGrid'
import NewsletterForm from './NewsletterForm'
import StarWarsApi from './StarWarsApi'

function MainComponent() {
  return (
    <div className="main">
      <StarWarsApi />
      <NewsletterForm />
      <BoxGrid darkMode={true} />
    </div>
  )
}

export default MainComponent