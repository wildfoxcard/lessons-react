import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const Toggle = () => {
    const delay = {
        circleOurCompany: 0
    }

    const [isToggled, setToggle] = useState(false)
    const circleOurCompany = useSpring({
        from: { width: "0px", backgroundColor: "white", color: "black", height: "0px" },
        to: {width: "250px", height: "250px"},
        delay: delay.circleOurCompany,
        // config: { tension: 100 }
        // transform: isToggled ? "translate3d(0,0,0)" : "translate3d(0, -50px,0)",
        // config: { friction: 0 }
    })

    return (
        <div>
            <animated.div style={circleOurCompany}>Hello</animated.div>
            <button onClick={() => setToggle(!isToggled)}>Toggle</button>
        </div>
    )
}

export default Toggle;