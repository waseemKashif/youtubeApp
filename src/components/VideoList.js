import React from "react";
import VideoItem from "./videoitem";
import "./videoitem.css";
import VideoCard from "./VideoCard";

const Videolist = ({ videos, onVideoChosen }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoCard
        key={video.id.videoId}
        onChildVselect={onVideoChosen}
        videohere={video}
      />
    );
  });

  return <div className="allVideos  ui grid ">{renderedList}</div>;
};
export default Videolist;
