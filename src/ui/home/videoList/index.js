import React from "react";
import { sortBy } from "lodash-es";
import { List, ListItem, ListContainer } from "./styles";

export const VideoList = ({ items, onPress }) => {
  let byDate = sortBy(items, "createdAt").reverse();

  return (
    <ListContainer>
      <List
        data={byDate}
        renderItem={({ item }) => (
          <VideoListItem item={item} onPress={onPress} />
        )}
      />
    </ListContainer>
  );
};

function dateTemplate(date) {
  return [
    date.toLocaleDateString(),
    date.toLocaleTimeString([], { minute: "numeric", hour: "numeric" })
  ].join(" - ");
}

const VideoListItem = ({ item, onPress }) => {
  return (
    <ListItem
      title={item.title}
      description={dateTemplate(item.createdAt)}
      onPress={onPress.bind(null, item.id)}
    />
  );
};
