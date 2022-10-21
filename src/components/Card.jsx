import React from 'react'
import star from '../images/star.png'

function Card(props) {
  return (
    <div className="card">
            <img src={`../images/${props.img}`} className="card--image" alt='sportler'/>
            <div className="card--stats">
                <img src={star} className="card--star" alt='start logo'/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
  )
}

export default Card