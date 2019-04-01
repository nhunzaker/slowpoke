import { DB, Videos } from "../data/database";
import { getYouTubeMeta } from "../data/endpoints/youtube";
import { useDatabase } from "./domain";

export function allVideos() {
  return Videos.query().observe();
}

export function getVideo(id) {
  return Videos.findAndObserve(id);
}

export function useVideos() {
  return useDatabase(allVideos, { initial: [] });
}

export function useVideo(videoId) {
  return useDatabase(getVideo, { args: [videoId] });
}

export async function createVideo(url) {
  let meta = await getYouTubeMeta(url);
  let video = await persistVideo(url, meta);

  return video;
}

export async function persistVideo(url, meta) {
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
