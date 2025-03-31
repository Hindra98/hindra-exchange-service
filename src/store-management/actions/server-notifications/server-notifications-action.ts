import { ActionTypes } from './../constants/action-types';
import {
  ModelShape,
  ToastNotificationAction,
  ValueToastNotificationType,
} from ".";
import { StoreRedux } from '@/store-management/store-creation';


let store:StoreRedux;
export const injectStoreInToastNotificationAction = (_store:StoreRedux) => { store = _store; }



export const showToastNotificationSuccess = (
  value: ValueToastNotificationType[]
) => {
    store.dispatch({ type: ActionTypes.SUCCESS_NOTIFICATIONS, payload: { type: "Success", value: value } } as ToastNotificationAction);
};

export const showToastNotificationInfo = (
  value: ValueToastNotificationType[]
) => {
    store.dispatch({ type: ActionTypes.INFO_NOTIFICATIONS, payload: { type: "Info", value: value } } as ToastNotificationAction);
};

export const showToastNotificationWarning = (
  value: ValueToastNotificationType[]
) => {
    store.dispatch({ type: ActionTypes.WARNING_NOTIFICATIONS, payload: { type: "Warning", value: value } } as ToastNotificationAction);
};

export const showToastNotificationError = (
  value: ValueToastNotificationType[]
) => {
    store.dispatch({ type: ActionTypes.ERROR_NOTIFICATIONS, payload: { type: "Error", value: value } } as ToastNotificationAction);
};

export const setServerNotification = (model: ModelShape) => {
  return {
    type: ActionTypes.SET_SERVER_NOTIFICATIONS,
    payload: model.command,
  } as SetServerNotificationAction;
};

export const removeNotification = (model: ModelShape) => {
  return {
    type: ActionTypes.REMOVE_SERVER_NOTIFICATION,
    payload: model.command,
  } as SetServerNotificationAction;
};
