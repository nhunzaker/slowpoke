export function getYouTubeMeta(videoUrl) {
  return Promise.resolve({
    title: "My test youtube video",
    url: videoUrl,
    width: 300,
    height: 200
  });
}
