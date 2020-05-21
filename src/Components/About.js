import React, { Component } from 'react';
import '../Styles/About.css';

class About extends Component {
    render() {
        return (
        <div class="about">
            <h1>About this blog</h1>
            <p> I will share my experience of messing around some frameworks and apis, and my interview experience, and some random thoughts, I think I need a place to collect some random thoughts in case I forget </p>
            <br />
            <h1>About me</h1>
            <p>
                I was born in 13th July, 1997, currently working as a software engineering intern in control team at ServiceNow, recently graduated from University of Michigan, majoring in Computer Science and Data Science. I like building full-stack silly useless pet projects, also like using machine learning techniques to solve real-world problems, but probably won't have enough patience to crack the whole LSTM paper
            </p>
            <p>
                Personally hobbies, I like to play League of Legend, but I only play Twisted Fate, well because others are too easy to master? (LOL) I play a little piano, for god sake, thanks to UM, it provides free access to piano practice room for non music school students, so I have chances to annoy other people a lot. I like playing basketball, my favorite nba player is Carmelo Anthony, well only speaking on the aspect of shooting skills, just beautiful.
            </p>
        </div>
        )
    }
}

export default About;
