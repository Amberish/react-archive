import React from 'react';
import { Component } from 'react';
import {Link} from "react-router";

import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";
import NavBar from "../../../commons/components/navbar";

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
        <NavBar heading="Library App Demo" submenu={this.createSubmenu()}/>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <BookList />
            </div>
            <div className="col-md-9">
              <div className="panel panel-default">
                <div className="panel-body">
                  <BookDetail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
