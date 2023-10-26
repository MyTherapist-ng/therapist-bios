"use client";
import React, { useEffect, useState } from "react";
import video from "../../assets/video.svg";
import YouTube, { YouTubeProps } from "react-youtube";
import { useUser } from "@/app/context/userContext";

const Video = () => {
  const { user } = useUser();
  const [videoId, setVideoId] = useState("");

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const extractVideoId = () => {
    if (user?.youtube_video_url) {
      const url = new URL(user?.youtube_video_url);
      const searchParams = url.searchParams;
      const videoId = searchParams.get("v");
      setVideoId(videoId as string);
    }
  };

  useEffect(() => {
    extractVideoId();
  }, []);

  return (
    <>
      {videoId && (
        <div className="mt-4 md:mt-[56px] h-[300px] md:h-[400px]">
          <YouTube
            videoId={videoId as string}
            opts={opts}
            onReady={onPlayerReady}
            className="w-full h-full rounded-[10px]"
          />
        </div>
      )}
    </>
  );
};

export default Video;
