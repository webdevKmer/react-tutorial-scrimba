import React from 'react'

function Card(props) {
  let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

  return (
    <div className="card">
            {badgeText && <div className="badge-text">{badgeText}</div>}            
            <img src={`../images/${props.img}`} className="card--image" alt='sportler'/>
            <div className="card--stats">
                <div className='rating'>
                  <img src='../images/star.png' className="card--star" alt='start logo'/>
                  <span>{props.rating}</span>
                </div>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.country}</span>
            </div>
            <div>
              <p>{props.title}</p>
              <p><span className="bold">From ${props.price}</span> / Person</p>
            </div>
        </div>
  )
}

export default Card