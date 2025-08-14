import { useOutlet, useNavigate } from "react-router-dom";
import { lazy } from "react";
import { bg, logo_blue } from "@/assets";
import { useGlobalAppContext } from "@/core/hooks/use-app-context";
import ImageLink from "../shared/image-link";
import { appName } from "@/core/constants/common-constants";
import "@/styles/layouts/_oauth-core-layout.scss";

const LanguageSelector = lazy(() => import("../form/LanguageSelector"));
const ModeSelector = lazy(() => import("../form/ModeSelector"));

export default function OauthRouteLayout() {
  const outlet = useOutlet();
  const { rExpires } = useGlobalAppContext();
  const navigate = useNavigate();
  if (
    rExpires !== null &&
    rExpires !== undefined &&
    rExpires * 1000 > Date.now()
  ) {
    navigate("/home", { replace: true });
  }

  return (
    <div className="w-full h-full min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-25">
        <img src={bg} alt="" className="w-full h-full" />
      </div>
      <div className="flex items-center justify-between gap-2 w-full">
        <ImageLink to="/" src={logo_blue} alt={appName} className="w-20" />
        <div className="flex items-center justify-end gap-3 divide-x px-4">
          <ModeSelector className="mode pe-2" />
          <LanguageSelector />
        </div>
      </div>
      <div className="w-full min-h-[calc(100vh-110px)] flex justify-center items-center pb-4">
        <div className="lg:w-3xl md:w-2xl sm:w-md w-sm min-w-xs bg-background text-foreground min-h-max p-2">
          {outlet}
        </div>
      </div>
    </div>
  );
}
