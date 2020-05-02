import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';


class Header extends Component {
    render() {
        return(
            <div class="topnav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><a href="/projects">projects</a></li>
                    <li><a href="/posts">posts</a></li>
                </ul>    
            </div>
        )   
    }
}

export default Header;
