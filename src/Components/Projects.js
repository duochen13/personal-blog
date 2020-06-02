import React, { Component } from 'react';
import '../Styles/Projects.css';
import projects_covid19_img from '../Images/projects_covid19.png';

class Projects extends Component {
    render() {
        return (
            <div class="projects">
                <h1>Covid-19 Data Visualization Tool</h1>
                <img src={projects_covid19_img} />
            </div>
        )
    }
}

export default Projects;
