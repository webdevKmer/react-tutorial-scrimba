import React, { useState } from 'react'


function MemeForm() {

  const [memes, setMemes] = useState([])

  const [formData, setFormData] = React.useState({
    topText : "",
    bottomText : "",
    memeImage : ""
    })
  
  React.useEffect(() =>{

    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => (setMemes(data.data.memes)))
    
    console.log(memes);
  }, [])

  function getRandomMemeUrl(){
    let idx = Math.floor(Math.random() * memes.length)
    return memes[idx].url
  }

  function handleChange(e) {
    const {name, value} = e.target
    e.preventDefault()
    console.log("changing input!!");
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name] : value
    }))
  }

  function handleClick(e) {
    e.preventDefault()
    setFormData(prevFormData => ({
      ...prevFormData, memeImage : getRandomMemeUrl()
    }))
    console.log("Submitting the form!");
    console.log(formData, formData.memeImage);
  }

  return (
    <>
    <form className="meme-form" onSubmit={handleClick}>
      <input
      onChange={handleChange}
      className='top-text'
      type="text"
      placeholder='Top Text'
      name='topText'
      value={formData.topText}
      />
      <input
      onChange={handleChange}
      className='bottom-text'
      type="text"
      placeholder='Bottom Text'
      name='bottomText'
      value={formData.bottomText}
      />
      <button className='form-btn'>Get a new image</button>
    </form>
    <div className="meme-card">
      <img src={formData.memeImage} alt="meme" />
      <h3 className="card-top-text">{formData.topText}</h3>
      <h3 className="card-bottom-text">{formData.bottomText}</h3>
    </div>
    </>
  )
}

export default MemeForm