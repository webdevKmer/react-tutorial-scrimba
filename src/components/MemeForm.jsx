import React from 'react'
import memes from '../memesData'


function MemeForm() {
  // memes = memes.data.memes
  function getRandomMemeUrl(){    
    // console.log(Math.random() * memes.data.memes.length);
    let idx = Math.floor(Math.random() * memes.data.memes.length)
    console.log(idx)
    console.log(memes.data.memes[idx].url)
  }
  function handleClick() {
    console.log("got clicked!!");
  }
  function handleMouseOver() {
    console.log("Mouse is hovering top text!!!!!");
  }
  return (
    <div className="meme-form">
      <input onMouseOver={handleMouseOver} className='top-text' type="text" placeholder='Top Text' />
      <input onMouseOver={getRandomMemeUrl} className='bottom-text' type="text" placeholder='Bottom Text' />
      <input onClick={handleClick} className='form-btn' type="submit" value="Get a new image" />
    </div>
  )
}

export default MemeForm