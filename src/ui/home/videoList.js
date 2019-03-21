import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import tinytime from "tinytime";

import { colorDivider } from "../colors";

const Container = styled.View`
  background: white;
  flex: 1;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

const ListItem = styled.View`
  border-color: ${colorDivider};
  border-bottom-width: 1px;
  padding: 16px;
  width: 100%;
`;

const DateText = styled.Text`
  font-weight: bold;
  font-size: 12px;
`;

const VideoText = styled.Text`
  color: rgba(0, 0, 0, 0.88);
  font-size: 16px;
`;

const getId = item => item.id;

export const VideoList = ({ items, onPress }) => {
  return (
    <Container>
      <FlatList
        data={items}
        keyExtractor={getId}
        renderItem={({ item }) => (
          <VideoListItem item={item} onPress={onPress} />
        )}
      />
    </Container>
  );
};

const dateTemplate = tinytime("{Mo}/{DD}/{YY} - {h}:{mm} {a}");

const VideoListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress.bind(null, item.url)}>
      <ListItem>
        <DateText>{dateTemplate.render(item.createdAt)}</DateText>
        <VideoText>{item.title}</VideoText>
      </ListItem>
    </TouchableOpacity>
  );
};
