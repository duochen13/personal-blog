import React, { Component } from 'react';
import '../Styles/Posts.css';
import { Route, Link } from 'react-router-dom';

import PostItem from './PostItem';

// props: data: [{id:, title:, content}, {}]
class Posts extends Component {
    // timvar ref: https://www.w3schools.com/howto/howto_css_timeline.asp
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props.data
        })
    }

    render() {  
        // err handling 
        let posts = this.state.data.map((item, index) => {
            const url_str = "/posts/" + item.id
                return <div class="container left" key={index}>
                <Link to={url_str}> 
                    <h2>{item.title}</h2>    
                </Link>
                <p> {item.content} </p> 

                </div>
        })

        return (
            <div>
                <Route path="/posts/:id" component={() =>
                    <PostItem id={this.props.match.params.id} />} />

                <div class="timeline">
                    {posts} 
                </div>           
            </div>
        )
    }
}

export default Posts;
