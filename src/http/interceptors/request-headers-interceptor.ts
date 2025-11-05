import { AuthenticationConstants } from "@/core/constants/authentication-contants";
import { getStorage } from "@/core/storage/storage";
import { InternalAxiosRequestConfig } from "axios";

/**
 * Intercepts http requests to aad headers.
 * @param config The axios current configuration.
 */
export const requestHeadersInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {

  config.headers["X-Api-Key"] =
    "68357cfc-5eaa-43ec-b7de-ca3e87588271.b881daf6-e22a-4d2f-abbe-5e18ddf32e2c";
  config.headers["Accept-Language"] = getStorage<string>(
    AuthenticationConstants.HINDRA_CONNECT_USER_LANGUAGE
  ) || "fr";
  config.headers["Authorization"] = `${getStorage<string>(
    AuthenticationConstants.ACCESS_TOKEN
  )}`;
  if (
    config.url?.includes("/authenticate") ||
    config.url?.includes("/refresh-token") ||
    config.url?.includes("/change-password") ||
    config.url?.includes("/log-out")
  ) {
    config.withCredentials = true;
  }

  return config;
};
