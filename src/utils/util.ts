export function normalizeURL(url: string): string {
  return url.replace(/\s+/g, "-");
}
