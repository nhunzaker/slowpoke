import styled from "styled-components/native";
import { colorDivider } from "../colors";

export const Container = styled.View`
  align-items: stretch;
  display: flex;
  elevation: 2;
  height: 100%;
  margin: 0 12px;
`;

export const Backdrop = styled.ImageBackground`
  background: #140f1e;
`;

export const ListContainer = styled.View`
  background: white;
  flex: 1;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  elevation: 2;
`;

export const ListItem = styled.View`
  border-color: ${colorDivider};
  border-bottom-width: 1px;
  padding: 16px;
  width: 100%;
`;

export const DateText = styled.Text`
  font-weight: bold;
  font-size: 12px;
`;

export const VideoText = styled.Text`
  color: rgba(0, 0, 0, 0.88);
  font-size: 16px;
`;
