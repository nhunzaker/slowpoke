import { Q } from "@nozbe/watermelondb";
import { useEffect, useState } from "react";

import { DB, Practices } from "../data/database";

export function videoPractices(videoId) {
  return Practices.query(Q.where("video_id", videoId));
}

export const usePractices = videoId => {
  let [practice, setPractice] = useState([]);

  useEffect(() => {
    let subscription = videoPractices(videoId)
      .observe()
      .subscribe(setPractice);

    return () => subscription.unsubscribe();
  }, [videoId]);

  return practice;
};

export function createPractice(video, speed) {
  return DB.action(async () => {
    let practice = Practices.create(practice => {
      practice.speed = speed;

      practice.video.set(video);
    });

    return practice;
  });
}
