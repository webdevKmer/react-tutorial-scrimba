import { useState } from 'react'
import './StateExample.css'

const StateExample = () => {
    const [answer, setAnswer] = useState('Yes')
    const handleClick = () => setAnswer(answer=='Yes'?'Clicked':'Yes')
  return (
    <section className='state'>
        <h2>Is State important to know</h2>
        <button onClick={handleClick}>{answer}</button>
    </section>
  )
}

export default StateExample