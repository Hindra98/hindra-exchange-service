import { AxiosError } from 'axios';
import { log } from '../../core/logging';
import { createClientHttpErrorLogParcel } from '../../core/logging/log-building';


/**
 * 
 * @param error 
 * @returns 
 */
export const onRequestError = (error: AxiosError): Promise<AxiosError> => {

    
    
    return Promise.reject(error);
}


/**
 * 
 * @param error 
 * @returns 
 */
export const onResponseError = async (error: AxiosError): Promise<any> => {

    log.error(createClientHttpErrorLogParcel(error), 'Server access prohibited because the jwt token expired.');

    if(error.code === "ERR_NETWORK"){
      return Promise.resolve();
    }

    return Promise.reject(error);
}

