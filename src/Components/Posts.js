import React, { Component } from 'react';
import '../Styles/Posts.css';
import { Route, Link } from 'react-router-dom';


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
        console.log("componenetDidMount props data: ", this.props.data)
    }
    render() {

        console.log("STATEDATA!: ", this.state.data);
       
        let posts = this.state.data.map((item, index) => {
            return <h1>{item.Title}</h1>
        })

        return (
            <div>
                <div class="timeline">
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
