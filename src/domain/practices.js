import { Q } from "@nozbe/watermelondb";
import { DB, Practices } from "../data/database";
import { useDatabase } from "./domain";

export function videoPractices(videoId) {
  return Practices.query(Q.where("video_id", videoId)).observe();
}

export function usePractices(videoId) {
  return useDatabase(videoPractices, { args: [videoId], initial: [] });
}

export function createPractice(video, speed) {
  return DB.action(async () => {
    let practice = Practices.create(practice => {
      practice.speed = speed;

      practice.video.set(video);
    });

    return practice;
  });
}
