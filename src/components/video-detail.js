import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <h3>Loading...</h3>
  }

  const id = video.id.videoId;
  const url = `https://www.youtube.com/embed/${id}`;
  return (
    <div className="video-detail col-md-8" >
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="detail">
          <h3>{video.snippet.title}</h3>
          <h6>{video.snippet.description}</h6>
        </div>
    </div>
  )
}

export default VideoDetail;