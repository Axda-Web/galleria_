import { ConfigContext, ExpoConfig } from "expo/config";

// App production config
const APP_NAME = "galleria_";
const BUNDLE_IDENTIFIER = "com.axdastudio.galleria";
const PACKAGE_NAME = "com.axdastudio.galleria_";
const ICON = "./assets/images/icons/icon.png";
const ADAPTIVE_ICON = "./assets/images/icons/adaptive-icon.png";
const SCHEME = "galleria";

export default ({ config }: ConfigContext): ExpoConfig => {
  console.log("⚙️ Building app for environment:", process.env.APP_VARIANT);
  const { name, bundleIdentifier, icon, adaptiveIcon, packageName, scheme } =
    getDynamicAppConfig(
      (process.env.APP_VARIANT as "development" | "preview" | "production") ||
        "development"
    );

  return {
    ...config,
    icon,
    scheme,
    name: name,
    slug: "galleria_",
    ios: {
      ...config.ios,
      bundleIdentifier: bundleIdentifier,
    },
    android: {
      ...config.android,
      adaptiveIcon: {
        foregroundImage: adaptiveIcon,
      },
      package: packageName,
    },
  };
};

// Dynamically configure the app based on the environment.
// Update these placeholders with your actual values.
export const getDynamicAppConfig = (
  environment: "development" | "preview" | "production"
) => {
  if (environment === "production") {
    return {
      name: APP_NAME,
      bundleIdentifier: BUNDLE_IDENTIFIER,
      packageName: PACKAGE_NAME,
      icon: ICON,
      adaptiveIcon: ADAPTIVE_ICON,
      scheme: SCHEME,
    };
  }

  if (environment === "preview") {
    return {
      name: `${APP_NAME} Preview`,
      bundleIdentifier: `${BUNDLE_IDENTIFIER}.preview`,
      packageName: `${PACKAGE_NAME}.preview`,
      icon: "./assets/images/icons/icon--prev.png",
      adaptiveIcon: "./assets/images/icons/adaptive-icon--prev.png",
      scheme: `${SCHEME}-prev`,
    };
  }

  return {
    name: `${APP_NAME} Development`,
    bundleIdentifier: `${BUNDLE_IDENTIFIER}.dev`,
    packageName: `${PACKAGE_NAME}.dev`,
    icon: "./assets/images/icons/icon--dev.png",
    adaptiveIcon: "./assets/images/icons/adaptive-icon--dev.png",
    scheme: `${SCHEME}-dev`,
  };
};
