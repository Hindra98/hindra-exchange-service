import { AuthenticationConstants } from "@/core/constants/authentication-contants";
import { useGlobalAppContext } from "@/core/hooks/use-app-context";
import { fallBackLanguage } from "@/core/Localization/base";
import { getBrowserLanguage } from "@/core/Localization/browser-language";
import { getStorage, setStorage } from "@/core/storage/storage";
import { useCallback, useState } from "react";
import Dropdown from "../ui/dropdowns/dropdown";


type Props = {
  className?: string;
  props?: Partial<DropdownProps>;
};


const LanguageSelector = ({ className="", props }: Props) => {
  const { languages } = useGlobalAppContext();

  const appLanguages = languages;

  const userLanguage = getStorage<string>(
    AuthenticationConstants.HINDRA_CONNECT_USER_LANGUAGE
  );

  const getLanguageIndex = (id: string): number => {
    if (id !== undefined) {
      const languageIndex = appLanguages?.findIndex((l) => l.id === id);

      if (languageIndex > -1) return languageIndex;
      else {
        const browserLanguageIndex = appLanguages?.findIndex(
          (l) => l.id === getBrowserLanguage()
        );
        if (browserLanguageIndex > -1) return browserLanguageIndex;
        else return getLanguageIndex(fallBackLanguage);
      }
    } else {
      return getLanguageIndex(fallBackLanguage);
    }
  };

  const userLanguageIndex = getLanguageIndex(userLanguage);

  const [selectedLanguage, setSelectedLanguage] = useState(
    appLanguages[userLanguageIndex]?.id
  );

  const refreshPage = () => {
    window.location.reload();
  };

  const reload = useCallback(() => refreshPage(), []);

  const selectLanguage = (lng: Language) => {
    setSelectedLanguage(lng.id);
    setStorage(AuthenticationConstants.HINDRA_CONNECT_USER_LANGUAGE, lng.id);
    reload();
  };

  const elements: DropdownElementProps[] = appLanguages.map((lng) => ({
    name: lng.displayName,
    selected: lng.id === selectedLanguage,
    onClick: () => selectLanguage(lng),
  }));

  return (
    <Dropdown className={`${className} flex items-center gap-2`}
      name={appLanguages[getLanguageIndex(selectedLanguage)]?.displayName}
      label="Selectionner votre langue"
      elements={elements}
      setChevron
      {...props}
    ></Dropdown>
  );
};

export default LanguageSelector;
