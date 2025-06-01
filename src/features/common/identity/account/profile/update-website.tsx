import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import { Button } from "@/components/ui/buttons/button";
import { Inputs } from "@/components/ui/inputs/input";
import { FaGithub, FaLinkedinIn, FaSpinner } from "react-icons/fa";
import { Earth } from "lucide-react";
import { updateWebsite } from "@/store-management/actions/profile/profile-actions";

const UpdateWebsite = () => {
  const dispatch = useAppDispatch();

  const profileUserStoreValue = useAppSelector(
    (state) => state.profileUser.value
  );
  const updateWebsiteStore = useAppSelector((state) => state.updateWebsite);

  const [websiteViewModel, setWebsiteViewModel] =
    useState<UpdateWebsiteCommand>({
      linkedin: profileUserStoreValue.linkedin,
      website: profileUserStoreValue.website,
      github: profileUserStoreValue.github,
    });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setWebsiteViewModel({
      ...websiteViewModel,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("websiteViewModel: ", websiteViewModel);
    dispatch(updateWebsite(websiteViewModel));
  };

  return (
    <form
      id=""
      className="w-full flex flex-col gap-4 py-2"
      onSubmit={handleSubmit}
    >
      <div className="linkedin w-full flex flex-col gap-1">
        <label htmlFor="linkedin">Linkedin</label>
        <Inputs
          id="linkedin"
          name="linkedin"
          icon={<FaLinkedinIn />}
          placeholder={"Compte Linkedin"}
          className="max-w-72"
          value={websiteViewModel.linkedin}
          onChange={handleChange}
        />
      </div>
      <div className="github w-full flex flex-col gap-1">
        <label htmlFor="github">Github</label>
        <Inputs
          id="github"
          name="github"
          icon={<FaGithub />}
          placeholder={"Github"}
          className="max-w-72"
          value={websiteViewModel.github}
          onChange={handleChange}
        />
      </div>
      <div className="website w-full flex flex-col gap-1">
        <label htmlFor="website">Site web</label>
        <Inputs
          id="website"
          name="website"
          icon={<Earth />}
          placeholder={"Site web"}
          className="max-w-72"
          value={websiteViewModel.website}
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        className={"w-fit"}
        disabled={updateWebsiteStore?.pending}
      >
        {updateWebsiteStore?.pending && <FaSpinner className="animate-spin" />}
        Sauvegarder
      </Button>
    </form>
  );
};

export default UpdateWebsite;
