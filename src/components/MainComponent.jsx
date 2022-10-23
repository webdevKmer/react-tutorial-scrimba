import React from 'react'
import BoxGrid from './BoxGrid'
import NewsletterForm from './NewsletterForm'

function MainComponent() {
  return (
    <div className="main">
      <NewsletterForm />
      <BoxGrid darkMode={true} />
    </div>
  )
}

export default MainComponent