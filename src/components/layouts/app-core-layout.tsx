import {
  Navigate,
  useLocation,
  useNavigate,
  useOutlet,
} from "react-router-dom";
import "../../styles/_app-core-layout.scss";
import { AuthenticationConstants } from "@/core/constants/authentication-contants";
import { useGlobalAppContext } from "@/core/hooks/use-app-context";
import { getStorage } from "@/core/storage/storage";
import { useCallback } from "react";

export const AppCoreLayout = () => {
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const token = getStorage<string>(AuthenticationConstants.ACCESS_TOKEN);
  const { accessToken, rExpires } = useGlobalAppContext();
  const navigate = useNavigate();

  const close = useCallback(() => {
    // dispatch(signOut());
    // Deconnexion
    setTimeout(() => navigate("/login", { replace: true }), 300);
  },[navigate])

  if (accessToken) {
    if (
      (rExpires !== null &&
        rExpires !== undefined &&
        rExpires * 1000 < Date.now()) ||
      rExpires === 0 ||
      rExpires === undefined
    ) {
      close();
    }
  } else {
    close();
  }

  if (!pathname.includes("change-password")) {
    getStorage<string>("is_verified", true);
  }
  if (token?.length === 0) {
    return <Navigate to={"/login"} replace />;
  }
  const classTarget = "main-menu-content";

  return (
    <>
      <div id="menu-wrapper" className="control-section h-screen">
        <div>Navbar</div>
        <div id="sidebarmenu" className="flex flex-row gap-0 mt-[50px]">
          <div>Sidebar</div>
          <div className={`w-full ${classTarget}`} id="maintext">
            <div className={`menu-content px-1`}>{outlet}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCoreLayout;
