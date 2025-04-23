import { useEffect, useState } from "react";
import { getStorage, setStorage } from "@/core/storage/storage";
import { CoreConstants } from "@/core/constants/common-constants";
import { FaMoon, FaSun } from "react-icons/fa";
import { Button } from "../ui/buttons/button";

type Props = {
  className: string;
  isText?: boolean;
};

const ModeSelector = ({ className, isText = false }: Props) => {
  const [theme, setTheme] = useState<string>(
    () => getStorage(CoreConstants.USER_THEME_MODE) || "light"
  );

  // Appliquer le thème au `document` et sauvegarder la préférence
  useEffect(() => {
    document.documentElement.className = theme; // Ajoute la classe au root
    setStorage(CoreConstants.USER_THEME_MODE, theme);
  }, [theme]);

  // Fonction pour basculer entre les modes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`${className} flex items-center gap-2`}>
      {theme === "light" ? (
        isText ? (
          <Button onClick={toggleTheme} className="w-full flex items-center gap-2">
            <FaMoon
              className="text-yellow-500 text-3xl"
            />
            Dark
          </Button>
        ) : (
          <FaMoon
            className="text-yellow-500 cursor-pointer rounded-full text-3xl p-1 hover:bg-amber-800 transition"
            onClick={toggleTheme}
          />
        )
      ) : isText ? (
        <Button onClick={toggleTheme} className="w-full flex items-center gap-2">
          <FaSun className="text-yellow-500 text-3xl" />
          Light
        </Button>
      ) : (
        <FaSun
          className="text-yellow-500 cursor-pointer rounded-full text-3xl p-1 hover:bg-amber-100 transition"
          onClick={toggleTheme}
        />
      )}
    </div>
  );
};

export default ModeSelector;
