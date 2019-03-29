import { createVideo } from "../videos";
import { createPractice } from "../practices";

jest.mock("../../data/endpoints/youtube");

describe("Practices", () => {
  let video = null;

  beforeEach(async () => {
    video = await createVideo("http://youtube.com/test");
  });

  it("can create a practice for a video", async () => {
    let practice = await createPractice(video, 1);

    expect(practice.video.id).toBe(video.id);
  });
});
