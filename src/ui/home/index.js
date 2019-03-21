import React from "react";
import { Navigation } from "react-native-navigation";
import styled from "styled-components/native";

import { allVideos, createVideo } from "../../domain/videos";
import { VideoForm } from "./videoForm";
import { VideoList } from "./videoList";
import { VIDEO_SCREEN } from "../video";
import { colorPrimaryDark } from "../colors";

const Container = styled.View`
  align-items: stretch;
  display: flex;
  elevation: 2;
  height: 100%;
  margin: 0 12px;
`;

const Backdrop = styled.ImageBackground`
  background: #140f1e;
`;

export const HOME_SCREEN = "HOME_SCREEN";

export class HomeScreen extends React.Component {
  state = {
    videos: []
  };

  createVideo = async url => {
    let video = await createVideo(url);

    this.visitVideo(video.id);
  };

  visitVideo = videoId => {
    Navigation.push(this.props.componentId, {
      component: {
        name: VIDEO_SCREEN,
        passProps: { videoId }
      }
    });
  };

  async componentDidMount() {
    this.setState({
      videos: await allVideos()
    });
  }

  render() {
    return (
      <Backdrop
        source={require("../../assets/violin.jpg")}
        imageStyle={{ opacity: 0.3 }}
      >
        <Container>
          <VideoForm onSubmit={this.createVideo} />
          <VideoList items={this.state.videos} onPress={this.visitVideo} />
        </Container>
      </Backdrop>
    );
  }
}
