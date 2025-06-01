import { Link, useLocation, useOutlet } from "react-router-dom";
import "@/styles/layouts/_app-core-layout.scss";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { programming_back } from "@/assets";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../ui/sidebar/sidebar";
import { BadgeCheck, Brush, CalendarClock, Settings, User } from "lucide-react";
import { sidebarConstants } from "@/core/constants/profile-constants";
import { FaCogs } from "react-icons/fa";

// Menu items.
const items: SidebarItemsProps[] = [
  {
    title: "Profil",
    url: "profile#" + sidebarConstants.PROFILE,
    icon: <User />,
  },
  {
    title: "Parametres de compte",
    url: "profile#" + sidebarConstants.ACCOUNT,
    icon: <Settings />,
  },
  {
    title: "Apparence et notifications",
    url: "profile#" + sidebarConstants.APPEARANCE,
    icon: <Brush />,
  },
  { separator: true },
  {
    title: "Mes prestations",
    url: "benefits",
    icon: <BadgeCheck />,
  },
  {
    title: "Mes reservations",
    url: "booking",
    icon: <CalendarClock />,
  },
  {
    title: "Categories",
    url: "category",
    icon: <CalendarClock />,
  },
];

const ProfileCoreLayout = () => {
  const outlet = useOutlet();
  const { pathname, hash, search } = useLocation();
  const link = pathname + hash + search;
  const linkSidebar = link.split("/").pop();

  console.log("linkSidebar: ", linkSidebar);
  console.log("link: ", link);
  return (
    <SidebarProvider
      id="profile-menu-wrapper"
      className="w-full md:w-5/6 h-full flex flex-col gap-4 px-4 mx-auto"
    >
      <div className="w-full flex flex-col items-start sm:flex-row sm:items-center justify-between gap-4">
        <div className="avatar flex items-center gap-3">
          <div className="block md:hidden">
            <SidebarTrigger className="cursor-pointer" />
          </div>
          <Avatar className="size-12 border">
            <AvatarImage src={programming_back} />
            <AvatarFallback delayMs={900}>
              <span className="text-2xl font-bold">HC</span>
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0 text-sm">
            <Link
              to={"/profile/REF002"}
              className="font-semibold text-lg hover:underline duration-300"
              title="Voir le profil"
            >
              Vadiny Fotsing
            </Link>
            <span className="text-foreground/50 font-semibold">
              Compte personnel
            </span>
          </div>
        </div>
        <Link
          to={"/profile/REF002"}
          className={
            "w-fit text-sm py-1 px-2 rounded-md cursor-pointer flex items-center gap-1 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 hover:scale-105 transition-all duration-200 ease-in-out"
          }
          title="Voir le profil"
        >
          Voir le profil
        </Link>
      </div>
      <div className="w-full h-full flex justify-between gap-4">
        <AppSidebar
          items={items}
          title={
            <h1 className="flex items-center gap-2">
              <FaCogs />
              <span>Hindra-Connect</span>
            </h1>
          }
          position="sticky"
          link={linkSidebar}
        />
        <div className="w-0.5 bg-primary/15 hidden md:flex" />
        <main className="w-full p-2">{outlet}</main>
      </div>
    </SidebarProvider>
  );
};

export default ProfileCoreLayout;
