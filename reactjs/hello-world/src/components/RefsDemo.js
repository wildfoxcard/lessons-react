import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
        this.cbRef = null;
        this.setCbRef = (element) => {
            console.log('element', element)
            this.cdRef = element
            console.log('cdRef', this.cdRef);
        }
    }


    componentDidMount() {
        console.log('this', this.cbRef)
        if (this.cbRef) {
            //this didn't work :( but this is the old way
            console.log(this.cbRef)
            this.cbRef.focus();
        }
        // this.inputRef.current.focus()
        setTimeout(() => {
            console.log('this', this.cbRef)}, 1000)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
