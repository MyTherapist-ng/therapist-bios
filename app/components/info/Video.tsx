"use client";
import React, { JSX, useEffect, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { STORE_KEYS } from "@/app/configs/store.config";
import { ITherapistResponseData } from "@/app/types/response.type";
import { getLocalStorageItem } from "@/app/utils/local-storage/localStorage";

/**
 * Video component that renders a YouTube video player.
 *
 * This component fetches and extracts the video ID from the user's YouTube video URL
 * and uses the `react-youtube` package to render the video player. It automatically
 * plays the video when the player is ready.
 *
 * The component listens for changes in the user context to update the video ID.
 *
 * @component
 * @returns {JSX.Element} A YouTube video player if the video ID is available.
 */
const Video = (): JSX.Element => {
  const user = getLocalStorageItem<ITherapistResponseData>(STORE_KEYS.USER);

  const [videoId, setVideoId] = useState<string | null>(null);

  /**
   * Event handler for when the YouTube player is ready.
   *
   * @param {Object} event - The event object passed by the YouTube player.
   * @param {Object} event.target - The YouTube player instance which can be used to access player methods.
   *
   * This function can be used to manipulate the player when it's ready, such as pausing
   * the video, starting playback, or other custom actions.
   */

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  /**
   * Extracts the video ID from the user's YouTube video URL and updates the `videoId` state.
   * This function is called when the user context is updated.
   */
  const extractVideoId = () => {
    if (
      user?.youtube_video_url
    ) {
      const url = new URL(user?.youtube_video_url);
      const searchParams = url.searchParams;
      const videoId = searchParams.get("v");
      setVideoId(videoId as string);
    }
  };

  useEffect(() => {
    extractVideoId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
