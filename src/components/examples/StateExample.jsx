import { useState } from 'react'
import './StateExample.css'

const StateExample = () => {
    const [answer, setAnswer] = useState(true)
    const handleClick = () => setAnswer(prev => !prev)
  return (
    <section className='state'>
        <h2>Is State important to know</h2>
        <button onClick={handleClick}>{answer?'Yes':'No'}</button>
    </section>
  )
}

export default StateExample