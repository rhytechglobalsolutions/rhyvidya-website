// Serves a binary brand asset (stored as base64 text under /assets-data)
// byte-identical, with a long immutable cache lifetime.
export function assetResponse(b64: string, contentType: string): Response {
  const bytes = Buffer.from(b64, "base64");
  return new Response(new Uint8Array(bytes), {
    headers: {
      "Content-Type": contentType,
      "Content-Length": String(bytes.length),
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
