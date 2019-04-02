import styled from "styled-components/native";
import {
  Surface,
  List as PaperList,
  Subheading as PaperSubheading
} from "react-native-paper";

export const Container = styled.View`
  align-items: stretch;
  background-color: white;
  display: flex;
  width: 100%;
`;

export const Section = styled(Surface)`
  background-color: white;
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

export const ListItem = PaperList.Item;

export const ListSection = PaperList.Section;

export const Subheading = styled(PaperSubheading)`
  padding: 16px 16px 8px;
  text-transform: uppercase;
`;

export { Divider } from "react-native-paper";
