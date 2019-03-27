import React, { useState, useEffect, useRef } from "react";
import Slider from "react-native-slider";
import styled from "styled-components/native";

import { colorSecondaryDark } from "../colors";
import { getVideo } from "../../domain/videos";
import { Player } from "./player";

const Container = styled.View`
  align-items: stretch;
  background-color: white;
  display: flex;
  elevation: 1;
  height: 100%;
  width: 100%;
`;

const Settings = styled.View`
  background-color: white;
  flex-basis: 56%;
  padding: 16px;
`;

const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const Field = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const PlaybackValue = styled.Text`
  flex-shrink: 0;
  padding-left: 8px;
  margin-bottom: 4px;
`;

export const VIDEO_SCREEN = "VIDEO_SCREEN";

export const VideoScreen = ({ videoId }) => {
  let video = useVideo(videoId);
  let [playback, setPlayback] = useState(1);

  return (
    <Container>
      <Player video={video} playback={playback} />

      <Settings>
        <Label>Playback Rate</Label>
        <Field>
          <Slider
            style={{ flex: 1 }}
            value={1}
            minimumValue={0.1}
            maximumValue={3}
            step={0.05}
            onValueChange={setPlayback}
          />
          <PlaybackValue>{playback.toFixed(2)}</PlaybackValue>
        </Field>
      </Settings>
    </Container>
  );
};

export const useVideo = videoId => {
  let [video, setVideo] = useState(null);

  useEffect(async () => {
    setVideo(await getVideo(videoId));
  }, [videoId]);

  return video;
};
