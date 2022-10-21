import React from 'react'

function Card(props) {
  console.log(props);
  return (
    <div className="card">
            <div className="place-image">
              <img src={props.imageUrl} alt="place" />
            </div>
            <div className="place-details">
              <div className="location">
                <img src="../images/star.png" alt="icon" />
                <div className="upper">{props.location}</div>
                <a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">Link to Google Maps</a>
              </div>
              <h2 className="title">{props.title}</h2>
              <p className="period">{props.startDate} - {props.endDate}</p>
              <p className="description">{props.description}</p>
            </div>
    </div>
  )
}

export default Card