import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import { Button } from "@/components/ui/buttons/button";
import { InputFile } from "@/components/ui/inputs/input";
import { FaSpinner } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { programming_back } from "@/assets";
import { updatePicture } from "@/store-management/actions/profile/profile-actions";

const UpdatePicture = () => {
  const dispatch = useAppDispatch();

  const profileUserStoreValue = useAppSelector(
    (state) => state.profileUser.value
  );
  const updatePictureStore = useAppSelector((state) => state.updatePicture);
  const [pictureViewModel, setPicture] = useState<UpdatePictureCommand>({
    picture: null,
    destination: "profile",
  });
  const handleFileChange = (files: File) => {
    setPicture({ picture: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userForm = document.querySelector("form");
    const formData = new FormData(userForm);
    formData.append("picture", pictureViewModel.picture);
    formData.append("destination", pictureViewModel.destination);
    dispatch(updatePicture(formData));
  };

  return (
    <form
      id=""
      className="w-full flex flex-col gap-4 py-2"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col lg:flex-row gap-3 justify-between lg:items-center w-full">
        <Avatar className="size-28 border">
          <AvatarImage
            src={
              pictureViewModel.picture
                ? URL.createObjectURL(pictureViewModel.picture)
                : profileUserStoreValue.picture || programming_back
            }
          />
          <AvatarFallback delayMs={900}>
            <span className="text-2xl font-bold">HC</span>
          </AvatarFallback>
        </Avatar>
        <InputFile
          label="Selectionner une photo (max 5 Mo)"
          onFilesChange={handleFileChange}
        />
      </div>
      <Button
        type="submit"
        className={"w-fit"}
        disabled={updatePictureStore?.pending}
      >
        {updatePictureStore?.pending && <FaSpinner className="animate-spin" />}
        Sauvegarder
      </Button>
    </form>
  );
};

export default UpdatePicture;
