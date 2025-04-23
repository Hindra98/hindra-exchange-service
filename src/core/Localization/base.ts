import { AuthenticationConstants } from "../constants/authentication-contants";
import { getStorage } from "../storage/storage";
import { getBrowserLanguage } from "./browser-language";

export const fallBackLanguage = "fr";

const culturesWithBase: string[] = ["en", "fr"];

export const IsLanguageTranslationAvailable = (language: string) => {
  const index = culturesWithBase.findIndex((l) => l === language);
  if (index > -1) {
    return true;
  }
  return false;
};

export const getAppLanguage = (): string => {
  const userLanguage: string = getStorage<string>(
    AuthenticationConstants.HINDRA_CONNECT_USER_LANGUAGE
  );
  return userLanguage
    ? userLanguage
    : IsLanguageTranslationAvailable(getBrowserLanguage())
    ? getBrowserLanguage()
    : fallBackLanguage;
};
