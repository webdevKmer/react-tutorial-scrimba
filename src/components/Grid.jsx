import React from 'react'
import Card from "./Card"

function Grid() {
  return (
    <div className="grid">
      <Card 
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount="6"
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price="136"/>
    </div>
  )
}

export default Grid