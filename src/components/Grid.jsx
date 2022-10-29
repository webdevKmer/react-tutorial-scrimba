import React from 'react'
import Card from "./Card"
import data from '../data'

function Grid() {
  let eltArr = data

  const cardsJSX = eltArr.map(elt => (
    <Card 
    key={elt.id} 
    img={elt.coverImg} 
    rating={elt.stats.rating} 
    reviewCount={elt.stats.reviewCount} 
    location={elt.location} 
    title={elt.title} 
    price={elt.price}
    openSpots = {elt.openSpots}
    />
  ))
  return (
    <div className="grid">
      {cardsJSX}
    </div>
  )
}

export default Grid