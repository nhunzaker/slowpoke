import React from "react";
import { sortBy } from "lodash-es";

import { List, ListItem, DateText, SpeedText } from "./styles";

export const PracticeList = ({ items }) => {
  let byDate = sortBy(items, "createdAt").reverse();

  return <List data={byDate} renderItem={PracticeListItem} />;
};

const PracticeListItem = ({ item }) => {
  return (
    <ListItem>
      <DateText>{item.createdAt.toLocaleDateString()}</DateText>
      <SpeedText>{item.speed.toFixed(2)}</SpeedText>
    </ListItem>
  );
};
