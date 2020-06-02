import React, { Component } from 'react';
import '../Styles/PostItem.css';
import PostItem0 from './Posts/PostItem0';
import PostItem1 from './Posts/PostItem1';
import PostItem2 from './Posts/PostItem2';


function DefaultItem() {
    return(
        <div>This is defaultItem</div>
    )
}

// props: id
class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: -1
        }
    }

    componentDidMount() {
        this.setState({
            id: this.props.match.params.id
        })
    }
    

    render() {
        var component = <DefaultItem />
        switch(this.state.id) {
            case "0": component = <PostItem0 />; break;
            case "1": component = <PostItem1 />; break;
            case "2": component = <PostItem2 />; break;
            default: component = <DefaultItem />; 
        }
        return (
            <div>
                {component}        
            </div>
        )
    }
}


export default PostItem;
