import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app";
import Index from "./components/index";
import AboutMe from "./components/about_me";
import VideoBrowser from "../projects/video-browser";
import LibraryApp from "../projects/library-app";

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Index} />
    <Route path="about-me" component={AboutMe} />
    <Route path="video-browser" component={VideoBrowser} />
    <Route path="library-app" component={LibraryApp} />
  </Route>
);
