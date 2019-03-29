import { Database } from "@nozbe/watermelondb";
import { Features } from "../features";

import { schema } from "./schema";
import { Video } from "./models/video";
import { Practice } from "./models/practice";

export const DB = new Database({
  adapter: Features.databaseAdapter(schema),
  modelClasses: [Video, Practice],
  actionsEnabled: true
});

export const Practices = DB.collections.get("practices");

export const Videos = DB.collections.get("videos");
