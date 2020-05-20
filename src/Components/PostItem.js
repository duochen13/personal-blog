import React, { Component } from 'react';
import '../Styles/PostItem.css';
import PostItemSideBar from './PostItemSideBar';

// props: section_names
function PostItem0(props) {
    return(
        <div class="postitem">
            <h1 id={props.section_names[0]}>Why vim is my favorite editor</h1>
            <hr />
            <p>In this article, I will talk about some interesting tricks and tips that keep developers away from mouse, and introduce some usefull vim plugins and my own vimrc file</p>
            <hr />
            <h3 id={props.section_names[1]}>Space or Tab?</h3>
            <p>If you want to insert space characters whenever the tab key is pressed</p>
            <div class="command">
                <p>set expandtab</p>
            </div>
            <p>When you type Tab key, the following command will automatically insert 4 spaces in the new line.</p>
            <div class="command">
                <p>set tabstop=4 </p>                
            </div>
            <p>when indentating with '>', insert 4 spaces, this is very helpful to avoid indentation error in python</p>
            <div class="command">
                <p>set shiftwidth=4</p>
            </div>
            <hr />

            <h3 id={props.section_names[2]}>Search keyword and repace it</h3>
            <p> [ESC] + '/' + 'NAME', will highlight the first apperance of the word in the current file, if you want to keep search, simply type 'n'. 
            </p>
            <p>
                Imagine you want to replace a specific variable with a new name, you can type [ESC] + ':%s/' + 'PREVIOUS NAME' + '/' + 'NEW_NAME'
            </p>
        </div>
    )
}


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
            id: this.props.match.params.id
        })
    }

    render() {
        const section_names_0 = ['Why Vim','Space or Tab', 'Search and Replace']
        return (
            <div>
                <PostItemSideBar section_names={section_names_0} />
                // id -> PostItem_id
                <PostItem0 section_names={section_names_0}/>
            </div>
        )
    }
}


export default PostItem;
