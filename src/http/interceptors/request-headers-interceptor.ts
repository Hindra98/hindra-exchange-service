import { AuthenticationConstants } from "@/core/constants/authentication-contants";
import { getStorage } from "@/core/storage/storage";
import { InternalAxiosRequestConfig } from "axios";
import { v4 as uuidv4 } from "uuid";

/**
 * Intercepts http requests to aad headers.
 * @param config The axios current configuration.
 */
export const requestHeadersInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  if (
    config.url?.includes("/test") ||
    config.url?.includes("/authenticate") ||
    config.url?.includes("/get-languages") ||
    config.url?.includes("/forgot-password") ||
    config.url?.includes("/accounts/reset-password") ||
    config.url?.includes("/refresh-token") ||
    config.url?.includes("/send-pin-code") ||
    config.url?.includes("/verify-identity")
  ) {
    config.headers["Allow-Anonymous"] = "1";

    if (config.url?.includes("/authenticate") || config.url?.includes("/forgot-password")) {
      const authViewModel = config.data;
      config.headers["Subscription-Key"] = authViewModel.subscriptionKey;
    }

    if (config.url?.includes("/accounts/reset-password")) {
      const authViewModel = config.data;
      config.headers["Tenant-Id"] = authViewModel.tenantId;
    }

    if (config.url?.includes("/refresh-token")) {
      config.headers["Tenant-Id"] = getStorage<string>(AuthenticationConstants.TENANT_ID);
    }
  } else {
    config.headers["Tenant-Id"] = getStorage<string>(AuthenticationConstants.TENANT_ID);
    config.headers["Authorization"] = `Bearer ${getStorage<string>(AuthenticationConstants.ACCESS_TOKEN)}`;
  }

  config.headers["X-Correlation-Id"] = uuidv4();
  config.headers["X-Api-Key"] = "68357cfc-5eaa-43ec-b7de-ca3e87588271.b881daf6-e22a-4d2f-abbe-5e18ddf32e2c";
  config.headers["Accept-Language"] = getStorage<string>(AuthenticationConstants.USER_LANGUAGE);

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
