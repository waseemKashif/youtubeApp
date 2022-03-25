import React from 'react';
import VideoItem from './videoitem';
import './videoitem.css'

const Videolist=({videos,onVideoChosen})=>{
    const renderedList=videos.map((video)=>{
        return <VideoItem key={video.id.videoId} onChildVselect={onVideoChosen} videohere={video}/>;
    });

    return <div className='ui list list-items'>{renderedList}</div>
}
export default Videolist;