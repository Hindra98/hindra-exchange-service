
import { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link, useRouteError } from "react-router-dom";
import { useLocalizer } from "@/core/Localization";
import { loadTranslationResources } from "@/core/Localization/load-language-resource";
import MailTo from "@/components/shared/mail-to";
import { technicalSupportEmail } from "../constants/errors-contants";
import ErrorPage from "./error-page";
import "@/styles/_error-handling.scss";

export default function FxErrorBoundary(props: PropsWithChildren) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={(error, errorInfo) => {
        <div>
          <p>{error?.message}</p> <p>{errorInfo?.componentStack}</p>
        </div>;
        // record the error in an APM tool...
      }}
    >
      {props.children}
    </ErrorBoundary>
  );
}

export function RouteErrorBoundary() {
  loadTranslationResources();
  const commonLocalizer = useLocalizer("Common-ResCommon");
  const error = useRouteError() as Error;

  return (
    <div className="form-base flex flex-col justify-center w-full">
      <div className="flex flex-col gap-6 justify-center min-h-[490px]">
        <div className="flex flex-col gap-6 justify-center min-h-[490px]">
          <div className="h-center gfont">
            <h1>
              {commonLocalizer(
                "MODULE_COMMON_ROUTE_ERROR_BOUNDARY_SOMETHING_WENT_WRONG"
              )}{" "}
              😢
            </h1>
            <div className="fs-16 line-gap">
              <p>
                <span>
                  {commonLocalizer("MODULE_COMMON_ROUTE_ERROR_BOUNDARY_NAME")}
                </span>
                {`${error.name}`}
              </p>
              <p>
                <span>
                  {commonLocalizer(
                    "MODULE_COMMON_ROUTE_ERROR_BOUNDARY_MESSAGE"
                  )}
                </span>
                {`${error.message}`}
              </p>
              <p>
                <span>
                  {commonLocalizer(
                    "MODULE_COMMON_ROUTE_ERROR_BOUNDARY_DETAILS"
                  )}
                </span>
                {`${error.stack}`}
              </p>
              <div className="go-a-head">
                <div className="">
                  <h2>
                    {commonLocalizer(
                      "MODULE_COMMON_ROUTE_ERROR_BOUNDARY_GO_AHEAD_EMAIL"
                    )}
                  </h2>
                  <div className="e-link">
                    <MailTo email={technicalSupportEmail}>
                      {technicalSupportEmail}
                    </MailTo>
                  </div>
                </div>
              </div>
            </div>
            <div className="go-back">
              <Link to=".." relative="path">
                {commonLocalizer("MODULE_COMMON_ROUTE_ERROR_BOUNDARY_GO_BACK")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
