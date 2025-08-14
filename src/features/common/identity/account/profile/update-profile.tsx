import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import * as Yup from "yup";
import { Button } from "@/components/ui/buttons/button";
import { InputCheck, Inputs } from "@/components/ui/inputs/input";
import { FaSpinner } from "react-icons/fa";
import { genderConstants } from "@/core/constants/profile-constants";
import { updateProfile } from "@/store-management/actions/profile/profile-actions";

const UpdateProfile = () => {
  const dispatch = useAppDispatch();

  const profileUserStoreValue = useAppSelector(
    (state) => state.profileUser.value
  );
  const updateProfileStore = useAppSelector((state) => state.updateProfile);

  const schema = Yup.object().shape({
    lastname: Yup.string(),
    firstname: Yup.string(),
    gender: Yup.string(),
  });

  const [profileViewModel, setProfileViewModel] =
    useState<UpdateProfileCommand>({
      lastname: profileUserStoreValue.lastname,
      firstname: profileUserStoreValue.firstname,
      gender: profileUserStoreValue.gender,
    });

  useEffect(() => {
    setProfileViewModel({
      lastname: profileUserStoreValue.lastname,
      firstname: profileUserStoreValue.firstname,
      gender: profileUserStoreValue.gender,
    });
  }, [profileUserStoreValue]);

  const [errors, setErrors] = useState({
    lastname: "",
    firstname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfileViewModel({
      ...profileViewModel,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ lastname: "", firstname: "" });

    const values = await schema.validate(profileViewModel);

    if (values.firstname === "" || values.lastname === "") {
      let firstname = "",
        lastname = "";
      if (values.firstname === "")
        firstname = "Vous devez renseigner un nom valide";
      if (values.lastname === "")
        lastname = "Vous devez renseigner un prenom valide";
      setErrors({
        lastname: lastname,
        firstname: firstname,
      });
    } else {
      dispatch(updateProfile(profileViewModel));
    }
  };

  return (
    <form id="" className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="lastname w-full flex flex-col gap-1">
        <label htmlFor="lastname">Prenoms</label>
        {errors.lastname && (
          <div className="error">{errors.lastname.toString()}</div>
        )}
        <Inputs
          id="lastname"
          name="lastname"
          placeholder={"Prenoms"}
          className={(errors.lastname && "error") + " max-w-72"}
          value={profileViewModel.lastname}
          onChange={handleChange}
        />
      </div>
      <div className="firstname w-full flex flex-col gap-1">
        <label htmlFor="firstname">Noms</label>
        {errors.firstname && (
          <div className="error">{errors.firstname.toString()}</div>
        )}
        <Inputs
          id="firstname"
          name="firstname"
          placeholder={"Noms"}
          className={(errors.firstname && "error") + " max-w-72"}
          value={profileViewModel.firstname}
          onChange={handleChange}
        />
      </div>

      <div className="gender md:w-fit w-full flex items-center gap-4">
        <span>Sexe :</span>
        <div className="flex items-center gap-3">
          <InputCheck
            label="Masculin"
            type="radio"
            name="gender"
            id="masculin"
            value={genderConstants.MASCULIN}
            checked={profileViewModel.gender === genderConstants.MASCULIN}
            onChange={() =>
              setProfileViewModel({
                ...profileViewModel,
                gender: genderConstants.MASCULIN,
              })
            }
          />
          <InputCheck
            label="Feminin"
            type="radio"
            name="gender"
            id="feminin"
            value={genderConstants.FEMININ}
            checked={profileViewModel.gender === genderConstants.FEMININ}
            onChange={() =>
              setProfileViewModel({
                ...profileViewModel,
                gender: genderConstants.FEMININ,
              })
            }
          />
        </div>
      </div>
      <Button
        type="submit"
        className={"w-fit"}
        disabled={updateProfileStore?.pending}
      >
        {updateProfileStore?.pending && <FaSpinner className="animate-spin" />}
        Sauvegarder
      </Button>
    </form>
  );
};

export default UpdateProfile;
