import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import { schema } from "./schema";
import { Video } from "./models/video";
import { Practice } from "./models/practice";

export const DB = new Database({
  adapter: new SQLiteAdapter({ schema }),
  modelClasses: [Video, Practice],
  actionsEnabled: true
});

export const Practices = DB.collections.get("practices");

export const Videos = DB.collections.get("videos");
