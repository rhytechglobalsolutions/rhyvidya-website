import { FAVICON_PNG_B64 } from "../../assets-data/favicon-png";
import { assetResponse } from "../lib/asset";

export const dynamic = "force-static";

export function GET() {
  return assetResponse(FAVICON_PNG_B64, "image/png");
}
