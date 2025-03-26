import { Link, useOutlet, useNavigate } from "react-router-dom";
import octopusfx from "../../assets/octopusfx.png";
import Image from "../form/Image";
import "../../styles/_authentication-flow.scss";
import { lazy } from "react";
import { useLocalizer } from "../../core/Localization";
import { useGlobalAppContext } from "../../core/hooks/use-app-context";

const LanguageSelector = lazy(() => import("../form/LanguageSelector"));
const MobileAppDownloadlinks = lazy(() => import("../shared/mobile-app-downloadLinks"));

export default function OpenRouteLayout() {
  const outlet = useOutlet();
  const { rExpires } = useGlobalAppContext();
  const navigate = useNavigate();
  const commonLocalizer = useLocalizer("Common-ResCommon");
  if (
    rExpires !== null &&
    rExpires !== undefined &&
    rExpires * 1000 > Date.now()
  ) {
    navigate("/dashboard", { replace: true });
  }

  return (
    <>
      <div className="form-base flex flex-col justify-center hscr w-full">
        
        <LanguageSelector className="languages absolute top-0 right-0 mx-2 py-2" />
        <div className="flex flex-col gap-6 justify-center min-h-[490px]">
          <div className="logo mx-auto py-4">
            <Image src={octopusfx} alt="OCTOPUSFX" title="" className="" />
          </div>
          <div className="child flex justify-center items-center h-[80%]">
            {outlet}
          </div>
          <div className="text-center mx-auto mb-4">
            <div className="help text-center mx-auto grid  justify-center gap-3">
              <div>
                <Link to={"/login"} className="return-previous">
                  {commonLocalizer("MODULE_COMMON_AUTHENTICATION_SCREEN_SIGNIN")}
                </Link>
              </div>
              <div>
                <Link to={"/help"} className="">
                  {commonLocalizer("MODULE_COMMON_AUTHENTICATION_LAYOUT_HELP")}
                </Link>
              </div>
            </div>
            <MobileAppDownloadlinks cssClassList="mobile mx-auto flex flex-row gap-3 mt-6" />
          </div>
        </div>
      </div>
      <div>Footer</div>
    </>
  );
}
