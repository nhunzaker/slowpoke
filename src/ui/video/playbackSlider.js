import React from "react";
import Slider from "react-native-slider";
import { createPractice } from "../../domain/practices";
import { Field, PlaybackValue, Section, Subheading } from "./styles";

export const PlaybackSlider = ({ video, value, onValueChange }) => {
  return (
    <Section>
      <Subheading>Playback Rate</Subheading>

      <Field>
        <Slider
          style={{ flex: 1 }}
          value={value}
          minimumValue={0.1}
          maximumValue={3}
          step={0.05}
          onValueChange={onValueChange}
          onSlidingComplete={createPractice.bind(null, video, value)}
        />
        <PlaybackValue>{value.toFixed(2)}</PlaybackValue>
      </Field>
    </Section>
  );
};
