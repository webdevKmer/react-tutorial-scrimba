import React, { useState } from "react"

export default function WindowTracker() {

    const [show, setShow] = React.useState(true)
    const [windowsWidth, setWindowsWidth] = useState(window.innerWidth)

    React.useEffect(() => {
        window.addEventListener('resize', () => setWindowsWidth(window.innerWidth))
    }, [])
    
    function handleClick(){
        console.log('clicked.')
        setShow(!show)
    }

    return (
        <div className="window-tracker">
            <button onClick={handleClick} className="input btn">
                Toggle WindowTracker
            </button>
            {show && <h1>Window width: {windowsWidth}</h1>}            
        </div>
    )
}
