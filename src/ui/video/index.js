import React from "react";
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

export class VideoScreen extends React.Component {
  state = {
    video: null,
    playback: "1"
  };

  setPlayback = playback => this.setState({ playback });

  updateVideoPlayback = () => {
    if (this.player == null) {
      return;
    }

    this.player.injectJavaScript(`
      var video = document.querySelector('video');
      if (video != null) {
        video.playbackRate = ${this.state.playback};
      }
    `);
  };

  async componentDidMount() {
    this.setState({
      video: await getVideo(this.props.videoId)
    });
  }

  render() {
    const { video, playback } = this.state;

    return (
      <Container>
        <Player video={video} playback={playback} />

        <Settings>
          <SettingsTitle>Settings</SettingsTitle>
          <Field>
            <Label>Playback Rate</Label>
            <PlaybackInput value={playback} onChangeText={this.setPlayback} />
          </Field>
        </Settings>
      </Container>
    );
  }

  renderPlayer() {}
}
