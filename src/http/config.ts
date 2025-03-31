import axios from "axios";
import { responseInterceptor } from "./interceptors/response-interceptor";
import { requestHeadersInterceptor } from "./interceptors/request-headers-interceptor";
import { onRequestError, onResponseError } from "./interceptors/on-errors";
import { responseDialogInterceptor } from "./interceptors/response-dialog-interceptor";
import { apiBaseUrl_local } from "../core/constants/http-constants";

const axiosInstance = axios.create({
  baseURL: apiBaseUrl_local,
});

const responseErrorInterceptions = [
  responseInterceptor,
  responseDialogInterceptor,
];

axiosInstance.interceptors.response.use(
  (config) =>
    responseErrorInterceptions.reduce(
      (config, response) => response(config),
      config
    ),
  (onRejected) => onResponseError(onRejected)
);

const requestHeaderInterceptions = [requestHeadersInterceptor];

axiosInstance.interceptors.request.use(
  (config) =>
    requestHeaderInterceptions.reduce(
      (config, response) => response(config),
      config
    ),
  (error) => onRequestError(error)
);

export default axiosInstance;
