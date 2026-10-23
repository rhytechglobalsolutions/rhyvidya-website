import { LOGO_THEME_B64 } from "../../../assets-data/logo-theme";
import { assetResponse } from "../../lib/asset";

export const dynamic = "force-static";

export function GET() {
  return assetResponse(LOGO_THEME_B64, "image/webp");
}
