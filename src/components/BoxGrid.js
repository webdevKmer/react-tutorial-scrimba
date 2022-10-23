import React from 'react'
import boxData from '../Boxes'
import Box from './Box'

function BoxGrid(props) {
    const [boxes, setBoxes] = React.useState(boxData)

    const boxesJSX = boxes.map((item) => (
        <Box key={item.id}  item={item} darkMode={props.darkMode} on={item.on}/>
    ))

  return (
    <div className="boxes">
        {boxesJSX}
    </div>
  )
}

export default BoxGrid