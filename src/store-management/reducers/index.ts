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
  verifyIdentityReducer,
  verifyRegistrationReducer,
} from "./oauth-reducers";

const rootReducer = combineReducers({
  authenticatedUser: authenticatedUserReducer,
  register: registerReducer,
  verifyIdentity: verifyIdentityReducer,
  verifyRegistration: verifyRegistrationReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,

  serverNotifications: setServerNotificationsReducer,
  toastNotifications: toastnotificationReducer,
  appLanguages: setLanguagesReducer,
  currentLanguage: changeLanguageReducer,
});

export default rootReducer;
