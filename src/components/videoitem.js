import React from "react";
import "./videoitem.css";

const VideoItem = ({ videohere, onChildVselect }) => {
  return (
    <div className="alignFit">
      <div
        onClick={() => onChildVselect(videohere)}
        className="item video-item"
      >
        <div className="ui left myVideoDiv">
          <img
            className="ui image"
            src={videohere.snippet.thumbnails.medium.url}
            alt="thumbnail here"
          />
          <div className="content">
            <div className="header">{videohere.snippet.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
