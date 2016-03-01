import _ from "lodash";
import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import NavBar from "../../commons/components/navbar";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyAL_P_9Dy5bSnMPWn9Dhwn_XrqBA6st-cM";

class VideoBrowser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("reactjs");
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);
    return (
      <div>
        <NavBar heading="Youtube App Demo"/>
        <div className="container">
          <SearchBar onSearchTermChange={videoSearch}/>
          <br/>
          <div className="row">
            <div className="col-md-8">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="col-md-4">
              <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoBrowser;
