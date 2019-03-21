import React, { useState } from "react";
import styled from "styled-components/native";
import { colorDivider, colorSecondaryDark } from "../colors";

const Container = styled.View`
  border-bottom-color: ${colorDivider};
  border-bottom-width: 1px;
  padding: 24px 24px 32px;
`;

const Title = styled.Text`
  color: ${colorSecondaryDark};
  font-size: 18px;
  margin-bottom: 8px;
`;

const UrlInput = styled.TextInput`
  background: white;
  border: 2px solid ${colorSecondaryDark};
  border-radius: 2px;
  margin-bottom: 16px;
  width: 100%;
`;

const SubmitButton = styled.Button``;

export const VideoForm = ({ onSubmit }) => {
  let [url, setUrl] = useState("https://www.youtube.com/watch?v=ggMPSbSyynY");

  return (
    <Container>
      <Title>Enter a YouTube video URL:</Title>
      <UrlInput onChangeText={setUrl} value={url} />
      <SubmitButton title="Go!" onPress={onSubmit.bind(null, url)} />
    </Container>
  );
};
