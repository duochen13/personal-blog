import React, { Component } from 'react';
import '../Styles/PostItemSideBar.css';

// props: section_names: [str1, str2]
class PostItemSideBar extends Component {
    constructor(props) {
        super(props)   
    }
    render() {
        console.log("section_names in sidebar: ", this.props.section_names);
        const aa = this.props.section_names.map((section_name, index) => {
            const link = "#" + section_name;
            return <a href={link}>{section_name}</a>
        })
        return (
            <div class="sidebar">
                {aa}
            </div>
        )
    }
}

export default PostItemSideBar;
