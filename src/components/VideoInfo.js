import React from "react";

const VideoInfo = () => {
  return (
    <div className="videoDetail">
      <div className="ui left labeled button" tabIndex="0">
        <p className="ui basic right pointing label">2,048</p>
        <div className="ui button">
          <i className="heart icon"></i> Like
        </div>
      </div>
      <div className="ui left labeled button" tabIndex="0">
        <p className="ui basic label">1,048</p>
        <div className="ui icon button">
          <i className="fork icon"></i>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
