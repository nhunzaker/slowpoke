import React, { useState } from "react";
import {
  Container,
  UrlInput,
  Field,
  SubmitButton,
  FormTitle,
  FormSubheading
} from "./styles";

export const VideoForm = ({ onSubmit }) => {
  let [url, setUrl] = useState("");

  return (
    <Container>
      <FormTitle>Start a new session</FormTitle>
      <FormSubheading>Paste your song from YouTube to begin</FormSubheading>

      <Field>
        <UrlInput
          onChangeText={setUrl}
          value={url}
          placeholder="Youtube Video Link"
        />

        <SubmitButton onPress={onSubmit.bind(null, url)}>Begin</SubmitButton>
      </Field>
    </Container>
  );
};
