/**
 * Access YouTube meta data by visiting this URL pattern:
 * https://www.youtube.com/oembed?url={url}&format=json
 */
function youTubeMetaUrl(videoUrl) {
  let url = new URL("https://www.youtube.com/oembed");

  url.searchParams.append("format", "json");
  url.searchParams.append("url", videoUrl);

  return url;
}

/**
 * Get YouTube Meta Data
 *
 * youTubeMetaData("https://www.youtube.com/watch?v=M9S7d-9z8Dw")
 *
 * {
 *   "title": "Andrea Astrabov\u00e1 - Jean Baptiste Accolay- Concerto no.1 in A minor",
 *   "provider_url": "https:\/\/www.youtube.com\/",
 *   "provider_name": "YouTube",
 *   "width": 480,
 *   "height": 270,
 *   // ... etc
 * }
 */
export async function getYouTubeMeta(videoUrl) {
  let url = youTubeMetaUrl(videoUrl);

  let response = await fetch(url, {
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error("Unable to access YouTube metadata for this video.");
  }

  return response.json();
}
