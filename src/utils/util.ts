export function normalizeURL(url: string) {
  // Replace multiple slashes (except in the protocol) with a single slash
  return url.replace(/([^:]\/)\/+/g, "$1").trim();
}
