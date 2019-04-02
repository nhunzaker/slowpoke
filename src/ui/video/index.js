import React, { useState } from "react";

import { useVideo } from "../../domain/videos";
import { usePractices } from "../../domain/practices";
import { Screen } from "../screen";
import { Container, Divider } from "./styles";
import { Player } from "./player";
import { PracticeList } from "./practiceList";
import { PlaybackSlider } from "./playbackSlider";

export const VIDEO_SCREEN = "VIDEO_SCREEN";

export const VideoScreen = ({ videoId }) => {
  let video = useVideo(videoId);
  let practices = usePractices(videoId);
  let [playback, setPlayback] = useState(1);

  return (
    <Screen>
      <Container>
        <Player video={video} playback={playback} />

        <PlaybackSlider
          value={playback}
          video={video}
          onValueChange={setPlayback}
        />

        <Divider />

        <PracticeList items={practices} />
      </Container>
    </Screen>
  );
};
