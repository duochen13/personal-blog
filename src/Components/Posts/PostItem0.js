import React, { Component } from 'react';
import '../../Styles/PostItem.css';


class PostItem0 extends Component {
    render() {
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
}

export default PostItem0;


