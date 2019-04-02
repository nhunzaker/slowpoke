import React from "react";

import { createVideo, useVideos } from "../../domain/videos";
import { Screen } from "../screen";
import { visitVideo } from "../../navigation";
import { VideoForm } from "./videoForm";
import { VideoList } from "./videoList";
import { Container, Backdrop } from "./styles";

export const HOME_SCREEN = "HOME_SCREEN";

export function HomeScreen({ componentId }) {
  let videos = useVideos();

  async function onVideoCreate(url) {
    let video = await createVideo(url);

    visitVideo(componentId, video.id);
  }

  return (
    <Screen>
      <Backdrop
        source={require("../../assets/violin.jpg")}
        imageStyle={{ opacity: 0.3 }}
      >
        <Container>
          <VideoForm onSubmit={onVideoCreate} />
          <VideoList
            items={videos}
            onPress={visitVideo.bind(null, componentId)}
          />
        </Container>
      </Backdrop>
    </Screen>
  );
}
