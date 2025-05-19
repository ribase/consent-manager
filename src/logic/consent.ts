import { createBanner } from "../ui/Banner";
import { getConfig } from "../config";

export function initConsentManager() {
  const config = getConfig();
  const existing = localStorage.getItem("consent_status");
  if (!existing) {
    const banner = createBanner(config);
    document.body.appendChild(banner);
  }
}