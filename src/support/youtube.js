const getYouTubeID = new RegExp(
  '(?:youtube(?:-nocookie)?.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu.be/)([^"&?/ ]{11})',
  "i"
);

export function parseYouTube(value = "") {
  let matches = value.match(getYouTubeID);
  return matches ? matches[1] : value;
}
