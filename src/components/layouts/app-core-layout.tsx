import { useOutlet } from "react-router-dom";
import { useGlobalAppContext } from "@/core/hooks/use-app-context";
import { useCallback, useState } from "react";
import { Navbar } from "../ui/nav/navbar";
import { Footer } from "../ui/nav/footer";
import "@/styles/layouts/_app-core-layout.scss";
import { useAppDispatch } from "@/core/hooks/core-hooks";
import { signOut } from "@/store-management/actions/oauth/oauth-actions";
import { sidebarConstants } from "@/core/constants/profile-constants";

const AppCoreLayout = () => {
  const dispatch = useAppDispatch();
  const outlet = useOutlet();
  const { accessToken, rExpires, claims } = useGlobalAppContext();
  const [isConnect, setIsConnect] = useState(!(accessToken !== null && rExpires > 0));

  const profile: ProfileUser = { fullName: claims.get("fullname") };

  const disconnect = useCallback(() => {
    // Deconnexion
    setTimeout(() => dispatch(signOut(null)), 300);
  }, [dispatch]);

  if (accessToken && rExpires > 0) {
    console.log("accesstoken IF: ", accessToken, claims);
  } else {
    // disconnect()
    console.log("accesstoken ELSE: ", accessToken, claims);
    console.log("rExpires ELSE: ", rExpires);
    console.log("Date ELSE: ", Date.now());
  }

  const userLinks: DropdownElementProps[] = [
    {
      name: "Mon profil",
      to: "me/profile",
    },
    {
      name: "Paramètres",
      to: "me/profile#"+sidebarConstants.ACCOUNT,
    },
    {
      name: "Messagerie",
      to: "me/messages",
    },
    {
      name: "Categories",
      to: "admin/category",
    },
    {
      name: "Deconnexion",
      onClick: disconnect,
      separator: true,
      className:
        "bg-red-500 hover:!bg-red-400 dark:hover:!bg-red-700 transition",
    },
  ];

  return (
    <div
      id="menu-wrapper"
      className="w-full h-full min-h-screen relative flex flex-col justify-between"
    >
      <Navbar isConnect={isConnect} userLink={userLinks} profile={profile} />
      <main>{outlet}</main>
      <Footer />
    </div>
  );
};

export default AppCoreLayout;
