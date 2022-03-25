import React, {useState,useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import useVideos from '../hooks/useVideos';

const App=()=>{
  
    const [selectedVideo,setSelectedVideo]= useState(null);
    const [videos,search]=useVideos('random videos');

    useEffect(()=>{
       setSelectedVideo(videos[0]);
    },[videos])
      
     
    
     
       return (
         <div className="ui container">
           <SearchBar onFormSubmitted={search} />
           <div className="ui grid">
             <div className="ui row">
               <div className="eleven wide column">
                 <VideoDetails video={selectedVideo} />
               </div>
               <div className="five wide column">
                 <VideoList
                   onVideoChosen={setSelectedVideo}
                   videos={videos}
                 />
               </div>
             </div>
           </div>
         </div>
       );
       }
       
export default App;