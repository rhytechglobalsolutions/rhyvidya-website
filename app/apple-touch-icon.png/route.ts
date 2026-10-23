import { APPLE_TOUCH_ICON_B64 } from "../../assets-data/apple-touch-icon";
import { assetResponse } from "../lib/asset";

export const dynamic = "force-static";

export function GET() {
  return assetResponse(APPLE_TOUCH_ICON_B64, "image/png");
}
