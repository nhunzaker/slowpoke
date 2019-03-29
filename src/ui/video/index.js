import React, { useState } from "react";

import { useVideo } from "../../domain/videos";
import { usePractices } from "../../domain/practices";

import { Container, Label, Field, Section, PlaybackValue } from "./styles";
import { Player } from "./player";
import { PracticeList } from "./practiceList";
import { PlaybackSlider } from "./playbackSlider";

export const VIDEO_SCREEN = "VIDEO_SCREEN";

export const VideoScreen = ({ videoId }) => {
  let video = useVideo(videoId);
  let practices = usePractices(videoId);
  let [playback, setPlayback] = useState(1);

  return (
    <Container>
      <Player video={video} playback={playback} />

      <Section>
        <Label>Playback Rate</Label>
        <Field>
          <PlaybackSlider
            value={playback}
            video={video}
            onValueChange={setPlayback}
          />
          <PlaybackValue>{playback.toFixed(2)}</PlaybackValue>
        </Field>
      </Section>

      <Section>
        <Label>Previous Sessions</Label>
        <PracticeList items={practices} />
      </Section>
    </Container>
  );
};
