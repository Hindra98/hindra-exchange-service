import { injectStoreInToastNotificationAction } from "./store-management/actions/server-notifications/server-notifications-action";
import { StoreRedux } from "./store-management/store-creation";

export const injectStore = (store:StoreRedux) => {

    injectStoreInToastNotificationAction(store);

}
