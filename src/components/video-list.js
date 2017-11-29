import React from "react";
import VideoListItem from './video-list-item';

const VideoList = ({ videos }) => {
  return (
    <div>
      <ul className="col-md-4 list-group">
        {
          videos.map(video => {
            return <VideoListItem key={video.etag} video={video} />
          })
        }
      </ul>
    </div>
  )
}

export default VideoList;