import React from "react";

const VideoList = ({ videos }) => {

  return (
    <div>
      <ul>
        {videos.map((video, index) => {
          return <li key={index}>{video.snippet.title}</li>
        })}
      </ul>
    </div>
  )
}

export default VideoList;