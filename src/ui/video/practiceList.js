import React from "react";
import styled from "styled-components/native";
import { colorDivider } from "../colors";
import { sortBy } from "lodash-es";

const List = styled.FlatList`
  padding-top: 8px;
`;

const ListItem = styled.View`
  border-color: ${colorDivider};
  border-bottom-width: 1px;
  padding: 8px 20px;
  min-height: 40px;
  display: flex;
  flex-direction: row;
`;

const DateText = styled.Text`
  font-weight: bold;
  flex-grow: 1;
`;

const SpeedText = styled.Text``;

const getId = item => item.id;

export const PracticeList = ({ items }) => {
  let byDate = sortBy(items, "createdAt").reverse();

  return (
    <List data={byDate} keyExtractor={getId} renderItem={PracticeListItem} />
  );
};

const PracticeListItem = ({ item }) => {
  return (
    <ListItem>
      <DateText>{item.createdAt.toLocaleDateString()}</DateText>
      <SpeedText>{item.speed.toFixed(2)}</SpeedText>
    </ListItem>
  );
};
