import React, { Component } from 'react';
import '../Styles/Posts.css';

class Posts extends Component {
    // https://www.w3schools.com/howto/howto_css_timeline.asp
    render() {
        return (
            <div>
                <div class="timeline">
                    <div class="container left">
                        <div class="content">
                            <h2>2017</h2>
                            <p>Lorem ipsum..</p>
                        </div>
                        <div class="content">
                            <h2>2016</h2>
                            <p>Lorem ipsum..</p>
                        </div>
                        <div class="content">
                            <h2>2016</h2>
                            <p>Lorem ipsum..</p>
                        </div>
                    </div>
                </div>           
            </div>
        )
    }
}

export default Posts;
