import { useEffect, useState } from "react";

import { DB, Videos } from "../data/database";
import { getYouTubeMeta } from "../data/endpoints/youtube";

export function allVideos() {
  return Videos.query().fetch();
}

export const useVideo = videoId => {
  let [video, setVideo] = useState(null);

  useEffect(() => {
    Videos.find(videoId).then(setVideo);
  }, [videoId]);

  return video;
};

export async function createVideo(url) {
  let meta = await getYouTubeMeta(url);

  let video = await DB.action(async () => {
    return Videos.create(video => {
      video.title = meta.title;
      video.url = url;
      video.thumbnail = meta.thumbnail_url;
      video.width = meta.width;
      video.height = meta.height;
    });
  });

  return video;
}
