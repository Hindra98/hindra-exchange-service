import { combineReducers } from "@reduxjs/toolkit";
import {
  changeLanguageReducer,
  setLanguagesReducer,
} from "./languages-reducers";
import {
  setServerNotificationsReducer,
  toastnotificationReducer,
} from "./server-notifications-reducer";
import {
  authenticatedUserReducer,
  forgotPasswordReducer,
  registerReducer,
  resetPasswordReducer,
} from "./oauth-reducers";

const rootReducer = combineReducers({
  authenticatedUser: authenticatedUserReducer,
  register: registerReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,

  serverNotifications: setServerNotificationsReducer,
  toastNotifications: toastnotificationReducer,
  appLanguages: setLanguagesReducer,
  currentLanguage: changeLanguageReducer,
});

export default rootReducer;
