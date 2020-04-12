import React, { useState, useEffect } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `you clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count { count }</button>
        </div>
    )
}

export default HookCounter

