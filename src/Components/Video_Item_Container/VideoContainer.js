import React from "react";
import VideoItem from "../Video_Item/VideoItem";

const VideoContainer = ({ videos, onSelectVideo }) => {
  // VideoItem component array
  const videoList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onSelectVideo={onSelectVideo}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{videoList}</div>;
};

export default VideoContainer;
