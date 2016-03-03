import React, { Component } from 'react';
import { Link } from "react-router";
import NavBar from "../../../commons/components/navbar";

import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";

export default class App extends Component {

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
        <NavBar heading="Weather App" submenu={this.createSubmenu()}/>
        <div className="col-md-8 col-md-offset-2">
        	<SearchBar />
          <br/>
        	<WeatherList />
        </div>
      </div>
    );
  }
}
