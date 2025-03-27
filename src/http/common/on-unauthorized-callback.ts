import { AxiosError, AxiosRequestConfig } from 'axios';
import { getStorage, setStorage } from '@/core/storage/storage';
import { log } from '../../core/logging';
import { createClientHttpErrorLogParcel } from '../../core/logging/log-building';
import  axiosInstance  from "../config";
import { ControllerApi } from "../../features/common/identity/oauth/locale/controller-api";
import { jwtDecode } from "jwt-decode";
import { setRefreshedToken } from "../../store-management/actions/oauth/oauth-actions"

let isRefreshingToken = false;

let store;
export const injectStoreInOnUnAuthorizedResponseCallBack = _store => {
    store = _store;
}

export const onUnAuthorizedResponseCallBack = async (retryCount: number, error: AxiosError, requestConfig: AxiosRequestConfig) => {
/*
    const controllerApi = new ControllerApi();
    const status = error.response ? error.response.status : null;
    const originalRequest: AxiosRequestConfig = requestConfig;

    if (status === 401) {

        log.error(createClientHttpErrorLogParcel(error), 'Server access prohibited because the jwt token expired.');

        if (!isRefreshingToken) {

            isRefreshingToken = true;
            const accessToken = getStorage<string>(AuthenticationConstants.ACCESS_TOKEN);
            console.log("Test access token : ", accessToken)

            if(accessToken){

            var decodedToken = jwtDecode(accessToken);

            if(decodedToken.exp < Date.now()){

                try {
                    const refreshToken = getStorage<string>("refresh_token");

                    if(refreshToken === undefined || refreshToken == null)
                    {
                        log.error(createClientHttpErrorLogParcel(error), 'Refresh token not found in local storage.');
                        throw new Error("Refresh token not found in local storage");
                    }

                        error.config.withCredentials = true;

                    const refreshTokenResponse = await controllerApi.refreshToken(error.config);

                    if(refreshTokenResponse !== undefined && refreshTokenResponse)
                    {
                        setStorage(AuthenticationConstants.ACCESS_TOKEN, refreshTokenResponse.token);

                        error.config.headers['Authorization'] = `Bearer ${refreshTokenResponse.token}`;

                        store.dispatch(setRefreshedToken({
                            token: refreshTokenResponse.token,
                        } as AuthenticateUserSuccessPayload));

                        // refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
                        //     axiosInstance
                        //     .request(config)
                        //     .then((response) => resolve(response))
                        //     .catch((err) => reject(err));
                        // });
            
                        // // Clear the queue
                        // refreshAndRetryQueue.length = 0;
            
                         return axiosInstance(originalRequest);
                    }

                    } catch (refreshError) {
                    
                    getStorage<string>(AuthenticationConstants.ACCESS_TOKEN, true);

                    // redirect the user to the login page
                    window.location.href = "/";

                    } finally {

                      isRefreshingToken = false;
                    }
                }
            }
        }
    }
    else {
            const code = error.code ? error.code : null;

            if (code.includes("ERR_NETWORK")) { // Erreur de connexion au reseau
                const msg = "Avertissement: Erreur de connexion au serveur - Reconnexion. Nombre de tentatives: " + retryCount;
                console.log(msg); // Mettre a la place un systeme de gestion d'erreur
            }
            else{
                log.error(createClientHttpErrorLogParcel(error), 'Error');
            }
    }
    */
 }

