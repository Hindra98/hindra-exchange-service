import { useLocalizer } from "@/core/Localization";
import ImageLink from "./image-link";
import { appstore, playstore } from "@/assets";

const MobileAppDownloadlinks = () => {
  const commonLocalizer = useLocalizer("Common-ResCommon");
  return (
    <div
      className={
        " flex flex-row gap-4 justify-center items-center"
      }
    >
      <div className="playstore">
        <ImageLink
          to={""}
          src={playstore}
          alt="Google Play Store"
          title={commonLocalizer(
            "MODULES_COMMON_Authentication_Download_Our_App_On_PlayStore"
          )}
          className="w-36"
        />
      </div>
      <div className="appstore">
        <ImageLink
          to={"https://play.google.com/id/7cwjkc4we"}
          src={appstore}
          alt="App Store"
          title={commonLocalizer(
            "MODULES_COMMON_Authentication_Download_Our_App_On_AppStore"
          )}
          className="w-36"
        />
      </div>
    </div>
  );
};

export default MobileAppDownloadlinks;
