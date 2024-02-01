import React from "react";

const VideoCard = ({ videohere, onChildVselect }) => {
  return (
    <div className=" four wide column" style={{ height: "100%" }}>
      <div className=" ui card">
        <div className=" image">
          {" "}
          <img
            className="ui image"
            src={videohere.snippet.thumbnails.medium.url}
            alt="thumbnail here"
          />
        </div>
        <div className="content">
          <div className="header">{videohere.snippet.title}</div>
        </div>
        <div className="ui two bottom attached buttons">
          <div
            className="ui red button"
            onClick={() => onChildVselect(videohere)}
          >
            <i class="play icon"></i>
            Watch
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
