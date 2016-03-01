import React from "react";

const VIdeoDetail =  ({video}) => {
  if(!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
        src={url}
        className="embed-responsive-item"></iframe>
      </div>
      <br/>
      <div className="panel panel-default details">
        <div className="panel-body">
  				<div>{ video.snippet.title }</div>
  				<div>{ video.snippet.description }</div>
        </div>
			</div>
    </div>
  );
};

export default VIdeoDetail;
