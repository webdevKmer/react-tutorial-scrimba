import React from 'react'

function Box(props) {

    const [isOn, setIsOn] = React.useState(props.on)

    const styles = {
        backgroundColor : isOn ? "#222" : "transparent",
        color : props.darkMode ? "grey" : "black",
        cursor : 'pointer'
    }

    function handleClick() {
        setIsOn((prevState) => (!prevState))
        console.log(isOn);
    }

    return (
        <div className='box' style={styles} onClick={handleClick}>{props.item.id}</div>
  )
}

export default Box