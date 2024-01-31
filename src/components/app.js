import React, { useState, useEffect } from "react";
import "./global.css";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import useVideos from "../hooks/useVideos";
import Loader from "./Loader";
import VideoInfo from "./VideoInfo";
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("ted talks");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container home">
      <SearchBar onFormSubmitted={search} />
      {videos === 0 ? (
        <Loader />
      ) : (
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={selectedVideo} />
              <div className=" videoInfo">
                <VideoInfo />
              </div>
            </div>
            <div className="five wide column">
              <VideoList onVideoChosen={setSelectedVideo} videos={videos} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
