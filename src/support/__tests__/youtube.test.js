import { parseYouTube } from "../youtube";

describe("parseYouTube", () => {
  const videoId = "dQw4w9WgXcQ";
  const patterns = new Map([
    ["shortcode", `http://youtu.be/${videoId}`],
    ["embed", `http://www.youtube.com/embed/${videoId}`],
    ["watch query string", `http://www.youtube.com/watch?v=${videoId}`],
    ["query string", `http://www.youtube.com/?v=${videoId}`],
    ["v url parameter", `http://www.youtube.com/v/${videoId}`],
    ["embed url paramete", `http,//www.youtube.com/e/${videoId}`],
    ["user hash", `http://www.youtube.com/user/username#p/u/11/${videoId}`],
    [
      "org hash",
      `http://www.youtube.com/sandalsResorts#p/c/54B8C800269D7C1B/0/${videoId}`
    ],
    [
      `watch extra query parameters`,
      `http://www.youtube.com/watch?feature=player_embedded&v=${videoId}`
    ],
    [
      `extra query parameters`,
      `http://www.youtube.com/?feature=player_embedded&v=${videoId}`
    ]
  ]);

  for (let [name, url] of patterns) {
    it(`extracts the video id from a ${name}`, () => {
      expect(parseYouTube(url)).toEqual(videoId);
    });
  }
});
