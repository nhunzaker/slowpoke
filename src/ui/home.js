import React, { useState } from "react";
import styled from "styled-components/native";
import { colorBackground, colorSecondaryDark } from "../colors";
import { Navigation } from "react-native-navigation";
import { VIDEO_SCREEN } from "./video";

const Container = styled.View`
  background-color: ${colorBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  height: 100%;
  width: 100%;
`;

const StyledText = styled.Text`
  font-size: 18px;
  color: ${colorSecondaryDark};
  margin-bottom: 8px;
`;

const TextInput = styled.TextInput`
  background: white;
  border: 2px solid ${colorSecondaryDark};
  border-radius: 2px;
  margin-bottom: 16px;
  width: 100%;
`;

const SubmitButton = styled.Button``;

export const HOME_SCREEN = "HOME_SCREEN";

export const HomeScreen = ({ componentId }) => {
  const [url, setUrl] = useState("");

  return (
    <Container>
      <StyledText>Enter a YouTube video URL:</StyledText>
      <TextInput onChangeText={setUrl} value={url} />
      <SubmitButton
        title="Go!"
        onPress={visitVideo.bind(null, componentId, url)}
      />
    </Container>
  );
};

const visitVideo = (componentId, url) => {
  Navigation.push(componentId, {
    component: {
      name: VIDEO_SCREEN,
      passProps: { url }
    }
  });
};
