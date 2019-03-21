import { DB, Practices } from "../data/database";

export function allPractices() {
  return Practices.query().fetch();
}

export function createPractice(videoUrl, speed = 1) {
  return DB.action(async () => {
    let practice = Practices.create(practice => {
      practice.videoUrl = videoUrl;
      practice.speed = speed;
    });

    return practice;
  });
}
