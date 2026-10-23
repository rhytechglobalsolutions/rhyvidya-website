import { LOGO_HEADER_B64 } from "../../../assets-data/logo-header";
import { assetResponse } from "../../lib/asset";

export const dynamic = "force-static";

export function GET() {
  return assetResponse(LOGO_HEADER_B64, "image/webp");
}
