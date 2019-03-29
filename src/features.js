import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

export const Features = {
  databaseAdapter: schema => new SQLiteAdapter({ schema })
};

export const setFeature = (key, value) => {
  if (key in Features) {
    Features[key] = value;
  } else {
    throw new Error(`Feature ${key} is not defined.`);
  }
};
