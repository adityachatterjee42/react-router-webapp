import React, { Component } from "react";
import ProjectBoxes from './ProjectBoxes.js';
var projectData = require('./projectInfo.json');
class Projects extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      projects : Object.values(projectData)
    };

  }
  render() {
    console.log(this.state.projects);
    return (
      <div id="projectboxes">
        <ProjectBoxes projects={this.state.projects}/>
      </div>
    );
  }
}
 
export default Projects;