import React from 'react'
import Hero from './Hero'
import About from './About'
import Grid from './Grid'

function MainComponent() {
  return (
    <div className="main">
        <Hero />
        <About />
        <Grid />
    </div>
  )
}

export default MainComponent