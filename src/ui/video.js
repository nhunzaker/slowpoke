import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";

import { parseYouTube } from "../support/youtube";
import { colorBackground, colorSecondaryDark } from "../colors";

const Container = styled.View`
  background-color: ${colorBackground};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  width: 100%;
`;

const Settings = styled.View`
  flex-basis: 56%;
  padding: 16px;
`;

const SettingsTitle = styled.Text`
  font-size: 16px;
  margin-bottom: 18px;
  text-transform: uppercase;
`;

const Field = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  padding-right: 16px;
`;

const PlaybackInput = styled.TextInput`
  background: white;
  border: 2px solid ${colorSecondaryDark};
  border-radius: 2px;
  margin-bottom: 16px;
  flex: 1;
`;

export const VIDEO_SCREEN = "VIDEO_SCREEN";

export const VideoScreen = ({ url }) => {
  let [playback, setPlayback] = useState(1);
  let player = useRef(null);
  let frameSrc = `https://www.youtube.com/embed/${parseYouTube(url)}`;

  return (
    <Container>
      <WebView
        originWhitelist={["youtube.com"]}
        style={{ flexBasis: "44%" }}
        ref={player}
        source={{
          uri: frameSrc
        }}
      />
      <Settings>
        <SettingsTitle>Settings</SettingsTitle>
        <Field>
          <Label>Playback Rate</Label>
          <PlaybackInput
            value={playback.toString()}
            onChangeText={setPlayback}
            onSubmitEditing={updateVideoPlayback.bind(null, player, playback)}
          />
        </Field>
      </Settings>
    </Container>
  );
};

const updateVideoPlayback = (player, playback) => {
  if (player.current == null) {
    return;
  }

  player.current.injectJavaScript(`
    var video = document.querySelector('video');
    if (video != null) {
      video.playbackRate = ${playback};
    }
  `);
};
