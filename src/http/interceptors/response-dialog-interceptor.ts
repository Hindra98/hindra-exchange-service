import { AxiosResponse } from 'axios';


/**
 * Intercepts http responses to handle server validation data.
 * @param response The axios current configuration.
 */
export const responseDialogInterceptor = (response: AxiosResponse<unknown>) => {

    return response
};