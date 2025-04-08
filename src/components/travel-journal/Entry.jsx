const Entry = ({img, title, country, googleMapsLink, text, dates}) => {
  return (
    <div className="entry">
      <div className="entry-image">
        <img src={img.src} alt={img.alt} />
      </div>
      <div className="entry-data">
        <div className="location"><span>{country}</span><span><a href={googleMapsLink}>View in Google Maps</a></span></div>
        <h2 className="place">{title}</h2>
        <h4>{dates}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Entry