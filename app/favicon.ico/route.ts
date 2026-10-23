import { FAVICON_ICO_B64 } from "../../assets-data/favicon-ico";
import { assetResponse } from "../lib/asset";

export const dynamic = "force-static";

export function GET() {
  return assetResponse(FAVICON_ICO_B64, "image/x-icon");
}
