import styled from "styled-components/native";
import { List as PaperList, Surface } from "react-native-paper";

export const List = styled.FlatList``;

export const ListItem = PaperList.Item;

export const Container = styled.View`
  align-items: stretch;
  display: flex;
  height: 100%;
  margin: 0 12px;
`;

export const Backdrop = styled.ImageBackground`
  background: #140f1e;
`;

export const ListContainer = styled(Surface)`
  background: white;
  flex: 1;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  elevation: 2;
`;
