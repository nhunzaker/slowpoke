import styled from "styled-components/native";
import { List as PaperList, Surface } from "react-native-paper";

export const List = styled.FlatList``;

export const ListItem = PaperList.Item;

export const ListContainer = styled(Surface)`
  background: white;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  elevation: 2;
  flex: 1;
`;
