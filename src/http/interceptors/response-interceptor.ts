import { AxiosResponse } from "axios";
import { navigateHeaderKey } from "./response-navigate-directive-interceptor";
import { setStorage } from "@/core/storage/storage";
import { AuthenticationConstants } from "@/core/constants/authentication-contants";

/**
 * Intercepts http responses to handle loading state.
 * @param response The axios current configuration.
 */
export const responseInterceptor = (response: AxiosResponse<unknown>) => {
  if (response === undefined) return response;

  if (response.headers[navigateHeaderKey]) return response;

  if (response.statusText === "OK") {
    // 200 OK
  } else {
    if (response.statusText === "Unauthorized") {
      console.log("Unauthorized - responseInterceptor");
    }
  }
  if (response.headers["New-Access-Token"])
    setStorage(
      AuthenticationConstants.ACCESS_TOKEN,
      response.headers["New-Access-Token"]
    );
  if (response.headers["token"])
    setStorage(AuthenticationConstants.ACCESS_TOKEN, response.headers["token"]);
  if ((response?.data as HcAxiosResponse)?.payload) {
    setStorage(
      AuthenticationConstants.ACCESS_TOKEN,
      (response?.data as HcAxiosResponse)?.payload?.token
    );
  }
  return response;
};
