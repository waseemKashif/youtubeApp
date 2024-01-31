import React from "react";

const VideoInfo = () => {
  return (
    <div className="videoDetail">
      <div class="ui labeled button" tabindex="0">
        <div class="ui button">
          <i class="heart icon"></i> Like
        </div>
        <a class="ui basic label">2,048</a>
      </div>
      <div class="ui left labeled button" tabindex="0">
        <a class="ui basic right pointing label">2,048</a>
        <div class="ui button">
          <i class="heart icon"></i> Like
        </div>
      </div>
      <div class="ui left labeled button" tabindex="0">
        <a class="ui basic label">1,048</a>
        <div class="ui icon button">
          <i class="fork icon"></i>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
