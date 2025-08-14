import { Link, useLocation, useOutlet } from "react-router-dom";
import "@/styles/layouts/_app-core-layout.scss";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { programming_back } from "@/assets";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../ui/sidebar/sidebar";
import { Brush, Settings, User } from "lucide-react";
import { sidebarAdminConstants } from "@/core/constants/profile-constants";
import { FaCogs } from "react-icons/fa";

// Menu items.
const items: SidebarItemsProps[] = [
  {
    title: "Gestion des utilisateurs",
    url: sidebarAdminConstants.PROFILE,
    icon: <User />,
  },
  { separator: true },
  {
    title: "categories",
    url: sidebarAdminConstants.CATEGORY,
    icon: <Settings />,
  },
  { separator: true },
  {
    title: "Prestations des prestataires",
    url: sidebarAdminConstants.BENEFITS,
    icon: <Brush />,
  },
  { separator: true },
  {
    title: "Commentaires",
    url: sidebarAdminConstants.COMMENTS,
    icon: <Brush />,
  },
];

const AdminCoreLayout = () => {
  const outlet = useOutlet();
  const { pathname, hash, search } = useLocation();
  const link = pathname + hash + search;
  const linkSidebar = link.split("/").pop();

  return (
    <SidebarProvider
      id="profile-menu-wrapper"
      className="w-full lg:w-5/6 h-full flex flex-col gap-4 px-4 mx-auto"
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
              Administrateur
            </span>
          </div>
        </div>
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

export default AdminCoreLayout;
