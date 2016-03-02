import React, { Component } from "react";
import { Link } from "react-router";
import NavBar from "../../commons/components/navbar";
import Thumbnail from "../../commons/components/thumbnail";
import data, { PROJECT_CONFIG } from "../project_info";

class Index extends Component {

  //Action buttons to be used in thumnail
  actionButtons(demo_link, detail_link) {
    return (
      <p>
        <Link to={(!demo_link) ? "/": demo_link} className="btn btn-primary" role="button">Demo</Link>
        <span className="gutter"></span>
        <Link to={(!detail_link) ? "/": detail_link} className="btn btn-default" role="button">View Details</Link>
      </p>
    );
  }

  //Rendering thumbnails for all projects
  renderThumbnails(){
    return data.map(info => {
      return <Thumbnail {...info} key={info.id} buttons={this.actionButtons(info.demo_link, info.detail_link)}/>
    });
  }

  createSubmenu() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="about-me" >
            <button className="btn btn-primary">About Me</button>
          </Link>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        <NavBar heading={PROJECT_CONFIG.name} submenu={this.createSubmenu()}/>
        <div className="container">
          <div className="row">
          { this.renderThumbnails() }
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
