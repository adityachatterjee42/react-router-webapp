import React, { Component } from "react";
 
class About extends Component {
  render() {
    return (
      <div>
        <h3>Hi there!</h3>
        <p>I'm currently a grad student at the <a style={{color:"white"}} href="https://ischool.uw.edu/" target="_blank" rel="noopener noreferrer">Information School</a> at the <a style={{color:"white"}} href="https://uw.edu/" target="_blank" rel="noopener noreferrer">University of Washington</a>, 
          where I'm studying Data Science and Human Computer Interaction.  </p>
        <p>Before joining the UW, 
          I earned a bachelor's degree in Computer Science & Communications Engineering at Manipal 
          Institute of Technology in Karnataka, India.</p>
        <p>My interests are at the intersection
          of computer science, information science and the social sciences, and stem from an early realization
          that technology will dictate how society progresses over the course of our lives.
        </p>
        <p>I'm also an amateur musician - as an undergrad I lead and occasionally played guitar for <a style={{color:"white"}} href="https://www.youtube.com/watch?v=DRGAQZZSzR0" target="_blank" rel="noopener noreferrer">Cloudburst</a>.</p>
      </div>
    );
  }
}
 
export default About;