import React, { useState } from "react";
import styled from "styled-components/native";
import {
  colorBackground,
  colorPrimaryDark,
  colorTextLight,
  colorSecondary
} from "../colors";

const Container = styled.View`
  padding: 32px 8px 36px;
`;

const Title = styled.Text`
  color: ${colorTextLight};
  font-weight: 500;
  font-size: 18px;
  elevation: 2;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.54);
`;

const Subtitle = styled.Text`
  color: white;
  font-size: 14px;
  margin-bottom: 24px;
  elevation: 2;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.54);
`;

const UrlInput = styled.TextInput`
  background: white;
  border-radius: 1px;
  elevation: 2;
  margin-right: 8px;
  padding: 4px 12px;
  flex: 1 1;
`;

const Field = styled.View`
  display: flex;
  flex-direction: row;
`;

const SubmitButton = styled.TouchableOpacity`
  color: rgba(0, 0, 0, 0.88);
`;

const SubmitButtonText = styled.Text`
  background: ${colorSecondary};
  border-radius: 1px;
  color: white;
  padding: 8px 16px;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.5px;
`;

export const VideoForm = ({ onSubmit }) => {
  let [url, setUrl] = useState("https://www.youtube.com/watch?v=ne4PoC7V0Mk");

  return (
    <Container>
      <Title>Start a new session</Title>
      <Subtitle>Paste your song from YouTube to begin</Subtitle>

      <Field>
        <UrlInput
          onChangeText={setUrl}
          value={url}
          placeholder="Youtube Video Link"
        />

        <SubmitButton onPress={onSubmit.bind(null, url)}>
          <SubmitButtonText>Begin</SubmitButtonText>
        </SubmitButton>
      </Field>
    </Container>
  );
};
