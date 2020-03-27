import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Mike</h1>
    //     </div>
    // )
    return React.createElement("div", {id : "hello", className: "dummy-class"}, React.createElement('h1', null, "Hello Mike"))
}

export default Hello;