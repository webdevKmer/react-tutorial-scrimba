import { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const handleAdd = () => setCounter(counter + 1)
    const handleMinus = () => setCounter(counter - 1)
  return (
    <section className='counter'>
        <h2>How many times will Bob say "state" in this section?</h2>
        <div className="box">{counter}</div>
        <button id='btn-minus' onClick={handleMinus}>-</button>
        <button id='btn-plus' onClick={handleAdd}>+</button>
    </section>
  )
}

export default Counter