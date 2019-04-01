import { Model } from "@nozbe/watermelondb";
import {
  date,
  field,
  relation,
  readonly
} from "@nozbe/watermelondb/decorators";

export class Practice extends Model {
  static table = "practices";

  static associations = {
    videos: { type: "belongs_to", key: "video_id" }
  };

  // Playback rate of the video
  @field("speed") speed;

  // Video related to this practice session
  @relation("video", "video_id") video;

  // Timestamps
  @readonly @date("created_at") createdAt;
  @readonly @date("updated_at") updatedAt;

  // Identifier for list views
  @field("id") key;
}
