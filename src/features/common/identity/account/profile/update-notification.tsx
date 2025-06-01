import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import { Button } from "@/components/ui/buttons/button";
import { FaSpinner } from "react-icons/fa";
import { notificationConstants } from "@/core/constants/profile-constants";
import { Switch } from "@/components/ui/inputs/input";
import { updateNotification } from "@/store-management/actions/profile/profile-actions";

const UpdateNotification = () => {
  const dispatch = useAppDispatch();

  const profileUserStoreValue = useAppSelector(
    (state) => state.profileUser.value
  );
  const updateNotificationStore = useAppSelector(
    (state) => state.updateNotification
  );

  const [notifcationViewModel, setNotificationViewModel] =
    useState<UpdateNotificationCommand>({
      notify_email: profileUserStoreValue.notify_email,
      notify_phone: profileUserStoreValue.notify_phone,
      notify_in_app: profileUserStoreValue.notify_in_app,
    });

  const handleChange = (value: boolean, name: string) => {
    setNotificationViewModel({ ...notifcationViewModel, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("notifcationViewModel: ", notifcationViewModel);
    dispatch(updateNotification(notifcationViewModel));
  };

  return (
    <form
      id=""
      className="w-full flex flex-col gap-4 py-2 max-w-96"
      onSubmit={handleSubmit}
    >
      <Switch
        name="notify_in_app"
        id="notify_in_app"
        label="Recevoir les notifications de l'application"
        value={notificationConstants.IN_APP}
        checked={notifcationViewModel.notify_in_app}
        onChange={(e) => handleChange(e, "notify_in_app")}
      />
      <Switch
        name="notify_email"
        id="notify_email"
        label="Recevoir les notifications par email"
        value={notificationConstants.EMAIL}
        checked={notifcationViewModel.notify_email}
        onChange={(e) => handleChange(e, "notify_email")}
      />
      <Switch
        name="notify_phone"
        id="notify_phone"
        label="Recevoir les notifications via sms"
        value={notificationConstants.PHONE}
        checked={notifcationViewModel.notify_phone}
        onChange={(e) => handleChange(e, "notify_phone")}
      />

      <Button
        type="submit"
        className={"w-fit"}
        disabled={updateNotificationStore?.pending}
      >
        {updateNotificationStore?.pending && (
          <FaSpinner className="animate-spin" />
        )}
        Sauvegarder
      </Button>
    </form>
  );
};

export default UpdateNotification;
