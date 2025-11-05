import { Book, ChevronDown, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { appName } from "@/core/constants/common-constants";
import { logo_blue } from "@/assets";
import LanguageSelector from "@/components/form/LanguageSelector";
import Dropdown from "../dropdowns/dropdown";
import { Button } from "../buttons/button";
import { lazy } from "react";
import { siteBaseUrl_local } from "@/core/constants/http-constants";

const ModeSelector = lazy(() => import("@/components/form/ModeSelector"));

export const Navbar = ({
  isConnect = false,
  userLink = [],
  profile = null,
}: NavbarProps) => {
  const menu: NavbarLink[] = [
    {
      title: "Prestations",
      url: "prestation",
      items: [
        {
          title: "Coiffure",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "coiffure",
        },
        {
          title: "Onglerie",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "onglerie",
        },
        {
          title: "Manutention",
          description: "Browse job listing and discover our workspace",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "manutention",
        },
        {
          title: "Support",
          description:
            "Get in touch with our support team or visit our community forums",
          icon: <Zap className="size-5 shrink-0" />,
          url: "support",
        },
      ],
    },
    {
      title: "Stats",
      url: siteBaseUrl_local + "#stats",
    },
    {
      title: "L'équipe",
      url: "team",
    },
    {
      title: "A propos",
      url: "about",
    },
  ];
  return (
    <header className="">
      {/* Desktop Menu */}
      <nav className="hidden w-full items-center justify-between md:flex">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <Link to={"/"} className="flex items-center min-w-fit gap-2 p-4">
            <img src={logo_blue} className="w-10" alt={appName} />
            <span className="text-lg font-semibold tracking-tighter">
              {appName}
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2 pe-2 min-w-fit z-10">
          {isConnect ? (
            <Dropdown
              name={
                <div className="flex items-center gap-2">
                  <span>{profile?.fullName ?? "Unknow"}</span>
                  {profile?.picture ? (
                    <img src={profile?.picture} width={48} height={48} />
                  ) : (
                    <ChevronDown />
                  )}
                </div>
              }
              rounded
              elements={userLink}
            ></Dropdown>
          ) : (
            <Link to={"oauth/login"} className="hover:underline min-w-fit">
              Se connecter
            </Link>
          )}
          <div className="flex items-center justify-end gap-3">
            <LanguageSelector />
            <ModeSelector className="mode" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="block md:hidden">
        <div className="flex items-center justify-between pe-4">
          {/* Logo */}
          <Link to={"/"} className="flex items-center min-w-fit gap-2 p-4">
            <img src={logo_blue} className="w-10" alt={appName} />
            <span className="text-lg font-semibold tracking-tighter">
              {appName}
            </span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto w-full sm:w-3/4 md:w-0">
              <SheetHeader>
                <SheetTitle>
                  <Link to={"/"} className="flex items-center gap-2">
                    <img src={logo_blue} className="w-8" alt={appName} />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 p-4 w-full">
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col gap-4"
                >
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>

                <div className="flex flex-col items-center gap-4 w-full">
                  {/* <ModeSelector className="mode w-full" isText /> */}
                  <LanguageSelector
                    props={{ isFulled: true }}
                    className="w-full"
                  />
                  {isConnect ? (
                    <Dropdown
                      className="w-full"
                      name={
                        <div className="flex items-center gap-2">
                          <span>{profile?.fullName ?? "Unknow"}</span>
                          {profile?.picture ? (
                            <img
                              src={profile?.picture}
                              width={48}
                              height={48}
                            />
                          ) : (
                            <ChevronDown />
                          )}
                        </div>
                      }
                      elements={userLink}
                      setChevron
                    ></Dropdown>
                  ) : (
                    <Link to={"oauth/login"} className="hover:underline">
                      Se connecter
                    </Link>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const renderMenuItem = (item: NavbarLink) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="cursor-pointer">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="">
          {item.items.map((subItem) => (
            <NavigationMenuLink key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} url={item.url} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex w-max items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: NavbarLink) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} url={item.url} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} to={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item, url = "" }: { item: NavbarLink; url: string }) => {
  return (
    <Link
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      to={url + "/" + item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};
