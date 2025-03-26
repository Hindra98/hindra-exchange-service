import { injectStoreInDialogApi } from "./components/dialog/notifications-api";
import { injectStoreInOnUnAuthorizedResponseCallBack } from "./http/common/on-unauthorized-callback";
import { injectStoreInRequestHeaderInterceptor } from "./http/interceptors/request-headers-interceptor";
import { injectStoreInToastNotificationAction } from "./store-management/actions/server-notifications/server-notifications-action";

export const injectStore = (store) => {

    injectStoreInOnUnAuthorizedResponseCallBack(store);
    injectStoreInDialogApi(store);
    injectStoreInRequestHeaderInterceptor(store);
    injectStoreInToastNotificationAction(store);

}
