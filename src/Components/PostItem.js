import React, { Component } from 'react';
import '../Styles/PostItem.css';


// props: id
class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: -1
        }
        // console.log("props: ", this.props.match.params.id);
    }

    componentDidMount() {
        this.setState({
            id: this.props.id
        })
    }

    render() {

        console.log("id: ", this.state.id)

        return (
            <div>
                id: {this.state.id}
                This is PostItem
            </div>
        )
    }
}


export default PostItem;
