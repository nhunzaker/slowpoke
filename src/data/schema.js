import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "videos",
      columns: [
        { name: "title", type: "string" },
        { name: "url", type: "string" },
        { name: "thumbnail", type: "string" },
        { name: "width", type: "number" },
        { name: "height", type: "number" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" }
      ]
    }),
    tableSchema({
      name: "practices",
      columns: [
        { name: "speed", type: "number" },
        { name: "video_id", type: "string", isIndexed: true },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" }
      ]
    })
  ]
});
