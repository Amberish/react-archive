import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app";
import Index from "./components/index";
import VideoBrowser from "../projects/video-browser";

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Index} />
    <Route path="/video-browser" component={VideoBrowser} />
  </Route>
);
