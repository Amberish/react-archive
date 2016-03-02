import React,{ Component } from "react";
import {Link} from "react-router";
import NavBar from "../../commons/components/navbar";

class LibraryApp extends Component {

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
    return(
      <div>
        <NavBar heading="Library App Demo" submenu={this.createSubmenu()}/>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ul className="list-group">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
            <div className="col-md-9">
              <div className="panel panel-default">
                <div className="panel-body">
                  <p>Here goes book content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LibraryApp;
