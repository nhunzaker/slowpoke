import React from "react";
import { sortBy } from "lodash-es";

import { List, ListSection, ListItem, Subheading } from "./styles";

export const PracticeList = ({ items }) => {
  let byDate = sortBy(items, "createdAt").reverse();

  return (
    <ListSection>
      <Subheading>Previous Sessions</Subheading>
      <List data={byDate} renderItem={PracticeListItem} />
    </ListSection>
  );
};

const PracticeListItem = ({ item }) => {
  return (
    <ListItem
      title={item.createdAt.toLocaleDateString()}
      description={item.speed.toFixed(2)}
    />
  );
};
