import { Model } from "@nozbe/watermelondb";
import { date, field, readonly } from "@nozbe/watermelondb/decorators";

export class Practice extends Model {
  static table = "practices";

  static associations = {
    videos: { type: "belongs_to", key: "video_id" }
  };

  // Playback rate of the video
  @field("speed") speed;

  // Video related to this practice session
  @field("video") video;

  // Timestamps
  @readonly @date("created_at") createdAt;
  @readonly @date("updated_at") updatedAt;
}
