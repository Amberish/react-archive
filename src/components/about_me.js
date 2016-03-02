import React, {Component} from "react";
import {Link} from "react-router";
import { PROJECT_CONFIG } from "../project_info";
import NavBar from "../../commons/components/navbar";

class AboutMe extends Component {

  createSubmenu() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/" >
            <button className="btn btn-danger">Back to home</button>
          </Link>
        </li>
      </ul>
    );
  }

  render() {
    return (
        <div>
          <NavBar heading={PROJECT_CONFIG.name} submenu={this.createSubmenu()}/>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="profile-pic">
                  <img src="image/profile.jpg"/>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4>Amberish Raj</h4>
                    <i><strong>Contact:</strong> amberish.raj@gmail.com</i><br/>
                    <i><strong>Expertise:</strong> Full-Stack Web Developer</i>
                  </div>
                  <div className="panel-body">
                    <p>
                      Hi! I am a Full Stack Web Developer with an experience of over 2.6 years. My core expertise is in <i>Laravel (an awesome PHP framework)</i>. I love to learn and play with new technologies,
                      this project is one of those examples supporting my claim. Currently I am in process of gaining experience in ReactJS.
                      ReactJS is a hot new technology which is gaining a lot of traction, and working with React is like a breeze.
                    </p>
                    <p>
                      React itself is an easy to learn tool, but its "Unidirectional Data Flow" concept is a little complicated to implement.
                      Once you get comfortable <a href="https://facebook.github.io/react/docs/thinking-in-react.html" target="_blank">&ldquo;Thinking in React&rdquo;</a>, this complexity fade away. To get started I undertook a course on
                      <i>Udemy</i> by <strong>Stephen Grider</strong>, course goes by the name of <a href="https://www.udemy.com/react-redux/" target="_blank"><i><strong>&ldquo;Modern React and Redux&rdquo;</strong></i></a>.
                      Its a well curated course for someone who wish to start in ReactJs and Redux. (Btw Redux is responsible for controlling the dataflow.)
                      In this course, 4 projects are covered. I have implemented all these projects on this website as a demo. I will be glad if this could be of any help.
                    </p>
                    <p>
                      <strong>Note:</strong> If you need any help feel free to contact me through info provided above.
                    </p>
                  </div>
                  <div className="panel-footer text-right">
                    <strong>Made with <i className="glyphicon glyphicon-heart"></i> and ReactJS</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
};

export default AboutMe;
