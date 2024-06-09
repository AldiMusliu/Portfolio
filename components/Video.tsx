"use client";
import React from "react";

const VideoBackground = () => {
  return (
    <video
      autoPlay
      loop
      muted
      controls
      className="absolute w-full h-full object-cover "
    >
      <source src="/assets/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;
