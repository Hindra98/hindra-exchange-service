import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import { Button } from "@/components/ui/buttons/button";
import { InputCheck, Select } from "@/components/ui/inputs/input";
import { FaSpinner } from "react-icons/fa";
import { themeConstants } from "@/core/constants/profile-constants";
import { useGlobalAppContext } from "@/core/hooks/use-app-context";
import { coreConstants } from "@/core/constants/common-constants";
import { getStorage, setStorage } from "@/core/storage/storage";
import { updateParams } from "@/store-management/actions/profile/profile-actions";

const UpdateParams = () => {
  const dispatch = useAppDispatch();

  const profileUserStoreValue = useAppSelector(
    (state) => state.profileUser.value
  );
  const updateParamsStore = useAppSelector((state) => state.updateParams);
  const { languages } = useGlobalAppContext();

  const [paramsViewModel, setParamsViewModel] = useState<UpdateParamsCommand>({
    userlanguage: profileUserStoreValue.userlanguage,
    theme:
      profileUserStoreValue.theme ||
      getStorage(coreConstants.USER_THEME_MODE) ||
      themeConstants.LIGHT,
  });
  const appLanguages: SelectItemsProps[] = languages.map((lng, idx) => ({
    name: lng.displayName,
    id: lng.id + idx,
    value: lng.id,
    title: lng.displayName,
    selected: paramsViewModel.userlanguage === lng.id,
  }));

  useEffect(() => {
    setParamsViewModel({
      userlanguage: profileUserStoreValue.userlanguage,
      theme:
        profileUserStoreValue.theme ||
        getStorage(coreConstants.USER_THEME_MODE) ||
        themeConstants.LIGHT,
    });
  }, [profileUserStoreValue]);

  // Appliquer le thème au `document` et sauvegarder la préférence
  useEffect(() => {
    document.documentElement.className = paramsViewModel.theme; // Ajoute la classe au root
    setStorage(coreConstants.USER_THEME_MODE, paramsViewModel.theme);
  }, [paramsViewModel.theme]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateParams(paramsViewModel));
  };

  return (
    <form
      id=""
      className="w-full flex flex-col gap-4 py-2"
      onSubmit={handleSubmit}
    >
      <div className="userlanguage w-full flex flex-col gap-1">
        <label htmlFor="userlanguage">Langue</label>
        <Select
          id="userlanguage"
          name="userlanguage"
          className="max-w-60"
          onChange={(e) =>
            setParamsViewModel({
              ...paramsViewModel,
              userlanguage: e.target.value,
            })
          }
          items={appLanguages}
        />
      </div>

      <div className="theme md:w-fit w-full flex items-center gap-4">
        <span>Theme :</span>
        <div className="flex items-center gap-3">
          <InputCheck
            label="Systeme"
            type="radio"
            name="theme"
            id={themeConstants.SYSTEM}
            value={themeConstants.SYSTEM}
            checked={paramsViewModel.theme === themeConstants.SYSTEM}
            onChange={() =>
              setParamsViewModel({
                ...paramsViewModel,
                theme: themeConstants.SYSTEM,
              })
            }
          />
          <InputCheck
            label="Clair"
            type="radio"
            name="theme"
            id={themeConstants.LIGHT}
            value={themeConstants.LIGHT}
            checked={paramsViewModel.theme === themeConstants.LIGHT}
            onChange={() =>
              setParamsViewModel({
                ...paramsViewModel,
                theme: themeConstants.LIGHT,
              })
            }
          />
          <InputCheck
            label="Sombre"
            type="radio"
            name="theme"
            id={themeConstants.DARK}
            value={themeConstants.DARK}
            checked={paramsViewModel.theme === themeConstants.DARK}
            onChange={() =>
              setParamsViewModel({
                ...paramsViewModel,
                theme: themeConstants.DARK,
              })
            }
          />
        </div>
      </div>
      <Button
        type="submit"
        className={"w-fit"}
        disabled={updateParamsStore?.pending}
      >
        {updateParamsStore?.pending && <FaSpinner className="animate-spin" />}
        Sauvegarder
      </Button>
    </form>
  );
};

export default UpdateParams;
