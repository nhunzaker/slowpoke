import React from "react";
import { WebView } from "react-native-webview";
import styled from "styled-components/native";

import { parseYouTube } from "../../support/youtube";
import { colorPrimaryDark } from "../colors";

const Container = styled.View`
  background-color: ${colorPrimaryDark};
  flex-basis: 44%;
`;

export class Player extends React.Component {
  static defaultProps = {
    playback: 1
  };

  player = React.createRef();

  updateVideoPlayback = () => {
    if (this.player.current == null) {
      return;
    }

    this.player.current.injectJavaScript(`
      var video = document.querySelector('video');
      if (video != null) {
        video.playbackRate = parseInt(${this.props.playback}) || 1;
      }
    `);
  };

  componentDidMount() {
    this.updateVideoPlayback();
  }

  componentDidUpdate() {
    this.updateVideoPlayback();
  }

  render() {
    let { video } = this.props;

    if (video == null) {
      // TODO: this should show a spinner or something
      return null;
    }

    let source = {
      uri: `https://www.youtube.com/embed/${parseYouTube(video.url)}`
    };

    return (
      <Container>
        <WebView
          ref={this.player}
          source={source}
          style={{ backgroundColor: "transparent" }}
        />
      </Container>
    );
  }
}
