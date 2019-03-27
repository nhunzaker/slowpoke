import { Model } from "@nozbe/watermelondb";
import { date, field, readonly } from "@nozbe/watermelondb/decorators";

export class Video extends Model {
  static table = "videos";

  // Video title
  @field("title") title;

  // Youtube URL
  @field("url") url;

  // Thumbnail image location
  @field("thumbnail") thumbnail;

  // Width of video in pixels
  @field("width") width;

  // Height of video in pixels
  @field("height") height;

  // Timestamps
  @readonly @date("created_at") createdAt;
  @readonly @date("updated_at") updatedAt;
}
