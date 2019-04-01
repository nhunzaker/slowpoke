import { Navigation } from "react-native-navigation";
import { VIDEO_SCREEN } from "./ui/video";

export function visitVideo(componentId, videoId) {
  Navigation.push(componentId, {
    component: {
      name: VIDEO_SCREEN,
      passProps: { videoId }
    }
  });
}
