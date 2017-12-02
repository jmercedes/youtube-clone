import React from 'react';

const VideoListItem = ({video, onSelectedVideo}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  
  return(
    <div>
      <li onClick={() => onSelectedVideo(video)} className="list-group-item">
        <div className="video-list media">
          <img src={imageUrl} alt="youtube video thumbnail" className="mr-3"/>
          <div className="media-body">
            <h6 className="mt-0 mb-1">{video.snippet.title}</h6>
          </div>
        </div>
      </li>
    </div>
  )
}

export default VideoListItem;