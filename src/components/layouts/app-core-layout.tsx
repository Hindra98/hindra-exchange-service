import { useOutlet } from "react-router-dom";
import { useGlobalAppContext } from "@/core/hooks/use-app-context";
import { useCallback } from "react";
import { Navbar } from "../ui/nav/navbar";
import { Footer } from "../ui/nav/footer";
import "@/styles/layouts/_app-core-layout.scss";

const AppCoreLayout = () => {
  const outlet = useOutlet();
  const { accessToken, rExpires } = useGlobalAppContext();
  // const [user, setUser] = useState(null)

  const disconnect = useCallback(() => {
    // Deconnexion
    // dispatch(signOut());
    // setTimeout(() => dispatch(signOut()), 300);
  }, []);

  if (accessToken) {
    if (
      (rExpires !== null &&
        rExpires !== undefined &&
        rExpires * 1000 < Date.now()) ||
      rExpires === 0 ||
      rExpires === undefined
    ) {
      disconnect();
    }
  } else {
    disconnect();
  }
  const userLinks: DropdownElementProps[] = [
    {
      name: "Mon profil",
      to: "profile",
    },
    {
      name: "Paramètres",
      to: "settings",
    },
    {
      name: "Deconnexion",
      to: "signout",
      separator:true,
      className: "bg-red-500 hover:!bg-red-400 dark:hover:!bg-red-700 transition",
    },
  ];

  return (
    <div
      id="menu-wrapper"
      className="w-full h-full min-h-screen relative flex flex-col justify-between"
    >
      <Navbar isConnect={false} userLink={userLinks} />
      <main>{outlet}</main>
      <Footer />
    </div>
  );
};

export default AppCoreLayout;
