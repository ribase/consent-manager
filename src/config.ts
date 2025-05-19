export interface ConsentConfig {
  language: string;
  theme: "light" | "dark";
  accentColor: string;
  texts: {
    description: string;
    acceptAll: string;
    rejectAll: string;
  };
}

export function getConfig(): ConsentConfig {
  const defaultConfig: ConsentConfig = {
    language: "en",
    theme: "light",
    accentColor: "blue",
    texts: {
      description: "We use cookies to optimize our website.",
      acceptAll: "Accept all",
      rejectAll: "Reject"
    }
  };

  const globalConfig = (window as any).consentManagerConfig;
  return globalConfig ? { ...defaultConfig, ...globalConfig } : defaultConfig;
}