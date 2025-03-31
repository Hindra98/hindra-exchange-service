import { combineReducers } from "@reduxjs/toolkit";
import {
  changeLanguageReducer,
  setLanguagesReducer,
} from "./languages-reducers";
import {
  setServerNotificationsReducer,
  toastnotificationReducer,
} from "./server-notifications-reducer";

const rootReducer = combineReducers({
  serverNotifications: setServerNotificationsReducer,
  toastNotifications: toastnotificationReducer,
  appLanguages: setLanguagesReducer,
  currentLanguage: changeLanguageReducer,
});

export default rootReducer;
