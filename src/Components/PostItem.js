import React, { Component } from 'react';
import '../Styles/PostItem.css';


// props: section_names
function PostItem0() {
    return(
        <div>
        <div class="sidebar" >
            <a href="#why-vim">Why Vim</a>
            <a href="#Space or Tab">Space or Tab</a>
            <a href="#Search and Replace"> Search and Replace</a>
        </div>
        <div class="postitem">
            <h1 id="why-vim">Why vim is my favorite editor</h1>
            <hr />
            <p>In this article, I will talk about some interesting tricks and tips that keep developers away from mouse, and introduce some usefull vim plugins and my own vimrc file</p>
            <hr />

            <h3 id="Space or Tab">Space or Tab?</h3>
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

            <h3 id="Search and Replace">Search keyword and repace it</h3>
            <p> [ESC] + '/' + 'NAME', will highlight the first apperance of the word in the current file, if you want to keep search, simply type 'n'. 
            </p>
            <p>
                Imagine you want to replace a specific variable with a new name, you can type [ESC] + ':%s/' + 'PREVIOUS NAME' + '/' + 'NEW_NAME'
            </p>
        </div>
        </div>
    )
}

function PostItem1() {
    return(
        <div>
        <div class="sidebar">
            <a href="#techlead">Techlead</a>
            <a href="#">Joma</a>
        </div>
        <div class="postitem">
            <h1 id="">Cute SWE Youtubers!</h1>
            <p>I will introduce some youtubers who currently work in software engineer industry or used to work in tech but get fired because of their youtube channel, also some thoughts after watching some of them</p>
            <hr />
            <h3 id="techlead">TechLead</h3>  
            <p>
                Ex-google, ex-facebook techlead, a lonely guys keep 
            </p>
            <h3 id="joma" > Joma </h3>
            <p>
                Techlead's friend, most of his videos have good background music, I think his version of 'a day in the life of a software engineer' video is the bests one among all video in this categories, checked out here, h's video has the bgm that I wanted to search for which song is, also the content is relaxing not like most of videos, which are just showing their fit body, free food at company, which audioence are getting tired of.
            </p>
            <h3 id="">Jarvis</h3>
            <p> My favorite video of him is ''</p>
        </div>
        </div>
    )    
}

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
