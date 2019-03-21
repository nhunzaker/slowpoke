import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { colorDivider } from "../colors";

const Container = styled.View`
  flex: 1;
`;

const ListItem = styled.View`
  background: white;
  border-color: ${colorDivider};
  border-bottom-width: 1px;
  padding: 16px;
  width: 100%;
`;

const DateText = styled.Text`
  font-weight: bold;
  margin-bottom: 4px;
`;

const VideoText = styled.Text``;

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

const VideoListItem = ({ item, onPress }) => {
  return (
    <ListItem>
      <TouchableOpacity onPress={onPress.bind(null, item.url)}>
        <DateText>{item.createdAt.toLocaleDateString()}</DateText>
        <VideoText>{item.title}</VideoText>
      </TouchableOpacity>
    </ListItem>
  );
};
