import React from "react";
import tinytime from "tinytime";
import { FlatList, TouchableOpacity } from "react-native";
import { sortBy } from "lodash-es";

import { ListContainer, ListItem, DateText, VideoText } from "./styles";

export const VideoList = ({ items, onPress }) => {
  let byDate = sortBy(items, "createdAt").reverse();

  return (
    <ListContainer>
      <FlatList
        data={byDate}
        renderItem={({ item }) => (
          <VideoListItem item={item} onPress={onPress} />
        )}
      />
    </ListContainer>
  );
};

const dateTemplate = tinytime("{Mo}/{DD}/{YY} - {h}:{mm} {a}");

const VideoListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress.bind(null, item.id)}>
      <ListItem>
        <DateText>{dateTemplate.render(item.createdAt)}</DateText>
        <VideoText>{item.title}</VideoText>
      </ListItem>
    </TouchableOpacity>
  );
};
