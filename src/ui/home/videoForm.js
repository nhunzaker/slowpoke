import React, { useState } from "react";
import styled from "styled-components/native";
import {
  colorBackground,
  colorPrimaryDark,
  colorTextLight,
  colorSecondary
} from "../colors";

const Container = styled.View`
  background: ${colorPrimaryDark};
  border-radius: 3px;
  margin: 16px 12px;
  padding: 12px 16px 16px;
  elevation: 2;
`;

const Title = styled.Text`
  color: ${colorTextLight};
  font-weight: 500;
  font-size: 18px;
`;

const Subtitle = styled.Text`
  color: white;
  opacity: 0.6;
  font-size: 14px;
  margin-bottom: 24px;
`;

const UrlInput = styled.TextInput`
  background: white;
  border-radius: 1px;
  elevation: 2;
  margin-bottom: 24px;
  padding: 8px 12px;
  width: 100%;
`;

const SubmitButton = styled.TouchableOpacity`
  color: rgba(0, 0, 0, 0.88);
  align-self: flex-end;
`;

const SubmitButtonText = styled.Text`
  color: ${colorSecondary};
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.5px;
`;

export const VideoForm = ({ onSubmit }) => {
  let [url, setUrl] = useState("");

  return (
    <Container>
      <Title>Start a new session</Title>
      <Subtitle>Paste your song from YouTube to begin</Subtitle>

      <UrlInput
        onChangeText={setUrl}
        value={url}
        placeholder="Youtube Video Link"
      />

      <SubmitButton onPress={onSubmit.bind(null, url)}>
        <SubmitButtonText>Begin</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};
