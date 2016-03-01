import React from 'react';
import { Component } from 'react';
import NavBar from "./navbar_component";
import Thumbnail from "./thumbnail_component";
import data from "../project_info";

export default class App extends Component {

  //Rendering thumbnails for all projects
  renderExamples(){
    return data.map(info => {
      return <Thumbnail {...info} key={info.id}/>
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
          { this.renderExamples() }
          </div>
        </div>
      </div>
    );
  }
}
