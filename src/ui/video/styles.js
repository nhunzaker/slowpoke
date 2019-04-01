import styled from "styled-components/native";
import { colorDivider } from "../colors";

export const Container = styled.View`
  align-items: stretch;
  background-color: white;
  display: flex;
  elevation: 1;
  width: 100%;
`;

export const Section = styled.View`
  background-color: white;
  border-bottom-color: ${colorDivider};
  border-bottom-width: 1px;
`;

export const Label = styled.Text`
  font-size: 16px;
  padding: 16px 16px 8px;
  text-transform: uppercase;
`;

export const Field = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 0 16px 16px;
`;

export const PlaybackValue = styled.Text`
  flex-shrink: 0;
  padding-left: 8px;
  margin-bottom: 4px;
`;

export const List = styled.FlatList`
  padding-top: 8px;
`;

export const ListItem = styled.View`
  border-color: ${colorDivider};
  border-bottom-width: 1px;
  padding: 8px 20px;
  min-height: 40px;
  display: flex;
  flex-direction: row;
`;

export const DateText = styled.Text`
  font-weight: bold;
  flex-grow: 1;
`;

export const SpeedText = styled.Text``;
