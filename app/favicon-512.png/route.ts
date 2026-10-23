import { FAVICON_512_B64 } from "../../assets-data/favicon-512";
import { assetResponse } from "../lib/asset";

export const dynamic = "force-static";

export function GET() {
  return assetResponse(FAVICON_512_B64, "image/png");
}
