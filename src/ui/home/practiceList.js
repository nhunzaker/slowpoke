import React from "react";
import { View, FlatList } from "react-native";
import styled from "styled-components/native";
import { colorSecondaryLight } from "../colors";

const ListItem = styled.View`
  border-color: ${colorSecondaryLight};
  border-bottom-width: 1px;
  padding: 8px;
  width: 100%;
`;

const DateText = styled.Text`
  font-weight: bold;
`;

const VideoText = styled.Text``;

const getId = item => item.id;

export const PracticeList = ({ items }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ background: "transparent" }}
        data={items}
        keyExtractor={getId}
        renderItem={PracticeListItem}
      />
    </View>
  );
};

const PracticeListItem = ({ item }) => {
  return (
    <ListItem>
      <DateText>{item.createdAt.toLocaleDateString()}</DateText>
      <VideoText>
        {item.videoUrl}- {item.speed}
      </VideoText>
    </ListItem>
  );
};
