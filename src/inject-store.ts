import { injectStoreInOnUnAuthorizedResponseCallBack } from "./http/common/on-unauthorized-callback";
import { injectStoreInToastNotificationAction } from "./store-management/actions/server-notifications/server-notifications-action";

export const injectStore = (store) => {

    injectStoreInOnUnAuthorizedResponseCallBack(store);
    injectStoreInToastNotificationAction(store);

}
