import { useLocalizer } from "@/core/Localization";
import { Link } from "react-router-dom";
import { error } from "@/assets";

const PageNotFound = () => {
  const commonLocalizer = useLocalizer("Common-ResCommon");

  return (
    <div className="flex justify-center items-center w-full h-screen bg-background min-h-[490px]">
      <div className="flex flex-col gap-0 justify-center items-center w-full">
        <img src={error} alt="404" className="w-2/5" />

        <div className="flex flex-col gap-2 justify-center items-center w-2/5">
          <h1 className="page-not-found font-bold text-5xl">
            {commonLocalizer("MODULE_COMMON_PAGE_NOT_FOUND_TITLE")}
          </h1>
          <p className="italic text-center">
            {commonLocalizer("MODULE_COMMON_PAGE_NOT_FOUND_DESCRIPTION")}
          </p>
          <Link to="../.." relative="path">
            {commonLocalizer("MODULE_COMMON_PAGE_NOT_FOUND_BACK_TO_HOME")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
