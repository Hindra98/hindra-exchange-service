import { useEffect, useState } from "react";
import { getStorage, setStorage } from "@/core/storage/storage";
import { coreConstants } from "@/core/constants/common-constants";
import { FaMoon, FaSun } from "react-icons/fa";
import { Button } from "../ui/buttons/button";
import { themeConstants } from "@/core/constants/profile-constants";

type Props = {
  className: string;
  isText?: boolean;
};
interface ModeSelectorProps {
  onToggle?: (theme: Theme) => void;
  className: string;
  isText?: boolean;
}

export const ModeSelector2 = ({ className, isText = false }: Props) => {
  const [theme, setTheme] = useState<string>(
    () => getStorage(coreConstants.USER_THEME_MODE) || themeConstants.LIGHT
  );

  // Appliquer le thème au `document` et sauvegarder la préférence
  useEffect(() => {
    document.documentElement.className = theme; // Ajoute la classe au root
    setStorage(coreConstants.USER_THEME_MODE, theme);
  }, [theme]);

  // Fonction pour basculer entre les modes
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themeConstants.LIGHT
        ? themeConstants.DARK
        : themeConstants.LIGHT
    );
  };

  return (
    <div className={`${className} flex items-center gap-2`}>
      {theme === themeConstants.LIGHT ? (
        isText ? (
          <Button
            onClick={toggleTheme}
            className="w-full flex items-center gap-2"
          >
            <FaMoon className="text-yellow-500 text-3xl" />
            Dark
          </Button>
        ) : (
          <FaMoon
            className="text-yellow-500 cursor-pointer rounded-full text-3xl p-1 hover:bg-amber-800 transition"
            onClick={toggleTheme}
          />
        )
      ) : isText ? (
        <Button
          onClick={toggleTheme}
          className="w-full flex items-center gap-2"
        >
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

const ModeSelector: React.FC<ModeSelectorProps> = ({
  onToggle,
  className,
  isText = false,
}) => {
  // État local pour le thème. Initialisez-le par défaut à 'light'
  const [theme, setTheme] = useState<Theme>(
    (getStorage(coreConstants.USER_THEME_MODE) || themeConstants.LIGHT) as Theme
  );

  // Appliquer le thème au `document` et sauvegarder la préférence
  useEffect(() => {
    document.documentElement.className = theme; // Ajoute la classe au root
    setStorage(coreConstants.USER_THEME_MODE, theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prevTheme) =>
      prevTheme === themeConstants.LIGHT
        ? (themeConstants.DARK as Theme)
        : (themeConstants.LIGHT as Theme)
    );

    // Appelez la fonction de rappel si elle est fournie
    const newTheme =
      theme === themeConstants.LIGHT
        ? themeConstants.DARK
        : themeConstants.LIGHT;
    if (onToggle) {
      onToggle(newTheme as Theme);
    }
  };

  return (
    <div className={` ${className} flex items-center gap-2`}>
      {isText && (
        <span className="text-sm font-medium text-foreground">Light</span>
      )}

      {/* Le conteneur principal (la piste du commutateur) 
        Nous utilisons 'peer' pour cibler le bouton de bascule lorsque l'input est actif.
      */}
      <label
        htmlFor="theme-toggle"
        className="relative inline-block w-14 h-8 cursor-pointer rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-gray-200 dark:bg-gray-700"
      >
        {/* L'input checkbox caché */}
        <input
          id="theme-toggle"
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleToggle}
          className="sr-only peer" // sr-only cache visuellement l'input, mais le rend accessible
        />

        {/* L'indicateur (la pastille) 
          Il bascule entre les icônes et se déplace avec la propriété 'translate-x'
        */}
        <span
          className={`absolute left-0 top-0 h-8 w-14 rounded-full transition-all duration-300 pointer-events-none overflow-hidden
          ${theme === "dark" ? "bg-indigo-600" : "bg-yellow-400"}`}
        >
          {/* Etoile pour la nuit */}
          {theme === "dark" && (
            <span className="relative w-full h-full flex bg-ambe-600">
              <i className="absolute flex rounded-full bg-white/30 shadow hadow-yellow-200 size-1.5 top-1 left-7/12"></i>
              <i className="absolute flex rounded-full bg-white/30 shadow hadow-yellow-200 size-0.5 top-2/12 left-1/12"></i>
              <i className="absolute flex rounded-full bg-white/30 shadow hadow-yellow-200 size-1.5 top-2/12 left-4/12"></i>
              <i className="absolute flex rounded-full bg-white/30 shadow hadow-yellow-200 size-1 top-6/12 left-1"></i>
              <i className="absolute flex rounded-full bg-white/30 shadow hadow-yellow-200 size-1.5 top-8/12 left-4/12"></i>
              <i className="absolute flex rounded-full bg-white/30 shadow hadow-yellow-200 size-0.5 top-9/12 left-1/12"></i>
              <i className="absolute flex rounded-full bg-white/30 shadow hadow-yellow-200 size-1.5 top-10/12 left-10/12"></i>
            </span>
          )}
          {/* Icône de soleil/lune pour l'indicateur */}
          <div
            className={`absolute w-6 h-6 rounded-full top-1 transition-transform duration-300 flex items-center justify-center 
              ${
                theme === "dark"
                  ? "translate-x-full left-1 bg-gray-800"
                  : "translate-x-0 left-1 bg-white"
              }`}
          >
            {/* Icône: Lune 🌙 (Mode Dark/Sombre) || Soleil ☀️ (Mode Light/Clair) */}
            {theme === "dark" ? (
              <span role="img" aria-label="moon" className="text-xl">
                🌙
              </span>
            ) : (
              <span role="img" aria-label="sun" className="text-xl">
                ☀️
              </span>
            )}
          </div>
        </span>

        {/* L'ombre de la piste pour le thème sombre (déplacée à gauche) */}
        <span
          className={`absolute left-1 top-1 h-6 w-6 rounded-full transition-transform duration-300 
            ${theme === "dark" ? "translate-x-full" : "translate-x-0"}`}
        ></span>
      </label>
      {isText && (
        <span className="text-sm font-medium text-foreground">Dark</span>
      )}
    </div>
  );
};

export default ModeSelector;
