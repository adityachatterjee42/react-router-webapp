import React, { Component } from "react";

class ProjectBoxes extends Component {
    constructor(props, context){
        super(props, context);

        this.createProjects = this.createProjects.bind(this);
    }
    createProjects(item){
        return(
            <li>
            <div>
                <a href={item.url}>{item.name}</a><br/>
                <p>{item.description}</p>
                <p>Tools: {item.tools}</p><br/>
            </div>
            </li>
        );
    }
    render(){
        var projects = this.props.projects;
        var projectboxes = projects.map(this.createProjects);

        return(
            <ul>
                {projectboxes}
            </ul>
        );
    }
}


export default ProjectBoxes;