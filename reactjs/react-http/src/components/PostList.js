import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log('response', response)
                this.setState({ posts: response.data })
            }).catch(errors => {
                console.log('errors', errors)
                this.setState({ errorMsg: "Error retreiving data." })
            });
    }

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ""
        }
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                List of Post
                {
                    posts.length !== 0
                    && posts.map(post => <div key={post.id}>{post.title}</div>)

                }
                <br />
                {errorMsg}
            </div>
        )
    }
}

export default PostList
