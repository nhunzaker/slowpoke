import React from "react";
import { View, Text } from "react-native";

export const VIDEO_SCREEN = "VIDEO_SCREEN";

export const VideoScreen = ({ url }) => {
  return (
    <View>
      <Text>This is the video screen</Text>
      <Text>Eventually this will show the video for {url}</Text>
    </View>
  );
};
