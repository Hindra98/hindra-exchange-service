import { appName } from "@/core/constants/common-constants";
import UpdateProfile from "./profile/update-profile";
import UpdatePhone from "./profile/update-phone";
import UpdateEmail from "./profile/update-email";
import UpdateWebsite from "./profile/update-website";
import UpdateParams from "./profile/update-params";
import UpdateLayout from "./layouts/update-layout";
import { Navigate, useLocation } from "react-router-dom";
import { sidebarProfileConstants } from "@/core/constants/profile-constants";
import UpdatePicture from "./profile/update-picture";
import UpdateNotification from "./profile/update-notification";
import { useAppDispatch } from "@/core/hooks/core-hooks";
import { useEffect, useState } from "react";
import { profileUser } from "@/store-management/actions/profile/profile-actions";

const Profile = () => {
  const { hash } = useLocation();
  const dispatch = useAppDispatch();
  const link = hash.split("#")[1];

  const [isCall, setIsCall] = useState(false);
  useEffect(() => {
    if (!isCall) {
      dispatch(profileUser());
      setIsCall(true);
    }
  }, [isCall, dispatch]);

  window.document.title = "Profile - " + appName;

  return (
    <div className="form-login w-full h-full flex flex-col gap-4 pe-2">
      {link === sidebarProfileConstants.ACCOUNT ? (
        <>
          <UpdateLayout id="email" title="Adresse de connexion">
            <UpdateEmail />
          </UpdateLayout>
          <UpdateLayout id="phone" title="Numero de telephone">
            <UpdatePhone />
          </UpdateLayout>
          <UpdateLayout id="website" title="Vos differents liens">
            <UpdateWebsite />
          </UpdateLayout>
        </>
      ) : link === sidebarProfileConstants.APPEARANCE ? (
        <>
          <UpdateLayout id="settings" title="Apparence">
            <UpdateParams />
          </UpdateLayout>
          <UpdateLayout id="notifications" title="Notifications">
            <UpdateNotification />
          </UpdateLayout>
        </>
      ) : link === sidebarProfileConstants.PROFILE ? (
        <>
          <UpdateLayout id="picture" title="Photo de profil">
            <UpdatePicture />
          </UpdateLayout>
          <UpdateLayout id="profile" title="Informations de profil">
            <UpdateProfile />
          </UpdateLayout>
        </>
      ) : (
        <Navigate to={"../profile#" + sidebarProfileConstants.PROFILE} />
      )}
    </div>
  );
};

export default Profile;
