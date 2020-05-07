import React, { Component } from 'react';
import '../Styles/Posts.css';
import { Route, Link } from 'react-router-dom';


// props: data: [{id:, title:, content}, {}]
class Posts extends Component {
    // timvar ref: https://www.w3schools.com/howto/howto_css_timeline.asp
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    componentDidMount() {
        console.log("post_data: ", this.state.data)
    }
    render() {
        console.log("POSTDATA!: ", this.props.data);
        const { data } = this.state;
        console.log("STATEDATA!: ", this.state.data);
        let posts = data.map((post) => {
            return (
              // <div key={i} class="content">
                   <h2>{post.title}</h2>
              //  </div>
            )
        });
        console.log("STATEDATA:", this.state.data)
        return (
            <div>
                <div class="timeline">

                    {posts}
                    //<div class="container left">
                    //   <div class="content">
                    //        <h2>2017</h2>
                    //        <p><Link to='/posts/2017'>hello</Link></p>
                    //    </div>
                    //    <div class="content">
                    //        <h2>2016</h2>
                    //        <p>Lorem ipsum..</p>
                    //    </div>
                    //    <div class="content">
                    //        <h2>2016</h2>
                    //        <p>Lorem ipsum..</p>
                    //    </div>
                    //</div>
                </div>           
            </div>
        )
    }
}

export default Posts;
