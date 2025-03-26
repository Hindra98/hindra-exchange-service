import { ActionTypes } from "../actions/constants/action-types";
import { produce } from "immer";
import {
  StoreShape,
  ToastNotificationAction,
  ValueToastNotificationStoreShape,
  initialState,
  initialStateValueToastNotification,
} from "../actions/server-notifications";

export const setServerNotificationsReducer = (
  state: StoreShape = initialState,
  args: SetServerNotificationAction
): StoreShape => {
  switch (args.type) {
    case ActionTypes.SET_SERVER_NOTIFICATIONS:

      return produce(state, draftState => {
          draftState.value = [args.payload];
      });

    default:
      return state;
  }
};

export const toastnotificationReducer = (
  state: ValueToastNotificationStoreShape = initialStateValueToastNotification,
  args: ToastNotificationAction
): ValueToastNotificationStoreShape => {
  switch (args.type) {
    case ActionTypes.SUCCESS_NOTIFICATIONS:
    case ActionTypes.INFO_NOTIFICATIONS:
    case ActionTypes.WARNING_NOTIFICATIONS:
    case ActionTypes.ERROR_NOTIFICATIONS:
      return produce(state, (draftState) => {
        draftState.value = args.payload.value;
      });

    default:
      return state;
  }
};
