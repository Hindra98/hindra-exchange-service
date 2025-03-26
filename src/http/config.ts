import axios from "axios";
import { responseInterceptor } from "./interceptors/response-interceptor";
import { requestHeadersInterceptor } from "./interceptors/request-headers-interceptor";
import { onRequestError, onResponseError } from "./interceptors/on-errors";
import { responseDialogInterceptor } from "./interceptors/response-dialog-interceptor";
import { apiBaseUrl, apiBaseUrl_local } from "../core/constants/http-constants";


export let axiosInstance = axios.create({

    // baseURL: "",
    // baseURL: apiBaseUrl,
    baseURL: apiBaseUrl_local,
});

// axiosRetry(axiosInstance,
//     {
//         retries: 3,
//         shouldResetTimeout: true,
//         onRetry(retryCount, error, requestConfig) {
//             onUnAuthorizedResponseCallBack(retryCount, error, requestConfig);
//             return;
//         }
//     });

const responseErrorInterceptions = [
    responseInterceptor,
    responseDialogInterceptor
];


axiosInstance.interceptors.response.use(config => responseErrorInterceptions.reduce((config, response) => response(config), config), onRejected => onResponseError(onRejected));

const requestHeaderInterceptions = [
    requestHeadersInterceptor,
];

axiosInstance.interceptors.request.use(config => requestHeaderInterceptions.reduce((config, response) => response(config), config), error => onRequestError(error));

export default axiosInstance;