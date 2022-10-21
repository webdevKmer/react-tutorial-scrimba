import React from 'react'
import Card from "./Card"
import data from '../data'

function Grid() {
  let eltArr = data

  const cardsJSX = eltArr.map(elt => (
    <Card key={elt.id} {...elt} /> ))
  return (
    <div className="grid">
      {cardsJSX}
    </div>
  )
}

export default Grid