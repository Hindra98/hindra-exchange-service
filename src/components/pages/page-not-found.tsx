import { useLocalizer } from "@/core/Localization";
import { Link } from "react-router-dom";
import { Button } from "../ui/buttons/button";

const PageNotFound = () => {
  const commonLocalizer = useLocalizer("Common-ResCommon");

  return (
    <div className="form-base bg-background flex flex-col justify-center w-full bg-amber-40">
      <div className="flex flex-col gap-6 justify-center min-h-[490px]">
        <div className="flex justify-center items-center">
          <div className="center-items">
            <h1 className="oups">
              {commonLocalizer("MODULE_COMMON_PAGE_NOT_FOUND_OUPS")}
            </h1>
            <h1 className="page-not-found">
              {commonLocalizer("MODULE_COMMON_PAGE_NOT_FOUND_TITLE")}
            </h1>
            <p className="text-primary-foreground"><Button className="cursor-pointer" size="lg" variant="destructive">Click me</Button></p>
            <div className="go-back">
              <Link to=".." relative="path">
                {commonLocalizer("MODULE_COMMON_PAGE_NOT_FOUND_BACK_TO_HOME")}
              </Link>
              <Button className="cursor-pointe" size="sm" variant="ghost">Click ghost</Button>
              <Button className="cursor-pointer" size="lg" variant="link">Click link</Button>
              <Button className="cursor-pointer" size="lg" variant="outline">Click outline</Button>
              <Button className="cursor-pointer" size="lg" variant="secondary">Click secondary</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
