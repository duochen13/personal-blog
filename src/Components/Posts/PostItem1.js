import React, { Component } from 'react';
import '../../Styles/PostItem.css';

class PostItem1 extends Component {
    render() {
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
                Ex-google, ex-facebook techlead. After watching over 10 videos of him, I found it was a beverage drink show, I believe most of his views are college students or new grad software engineers just like me. Thus he also would like to publish some videos like 'Top 3 lanuguages to learn in 2020', 'A day in the life of SWE', that kind of hot topic on youtube, of course, if you add some words like "Stanford", "Silicon Valley", "Google", the number of views will boot a lot obviously. After watching a tons of a day in the life of software engineers,
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
}

export default PostItem1;
