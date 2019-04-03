import styled from "styled-components/native";
import { Button, Title, Subheading } from "react-native-paper";
import { colorSecondary, colorTextLight } from "../../colors";

export const Container = styled.View`
  padding: 32px 8px 36px;
`;

export const FormTitle = styled(Title)`
  color: ${colorTextLight};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.54);
`;

export const FormSubheading = styled(Subheading)`
  color: white;
  margin-bottom: 24px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.54);
`;

export const UrlInput = styled.TextInput`
  background: white;
  border-radius: 1px;
  elevation: 2;
  margin-right: 8px;
  padding: 4px 12px;
  flex: 1 1;
`;

export const Field = styled.View`
  display: flex;
  flex-direction: row;
`;

export const SubmitButton = styled(Button)`
  background: ${colorSecondary};
  border-radius: 1px;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.5px;
`;

export const SubmitButtonText = styled.Text``;
