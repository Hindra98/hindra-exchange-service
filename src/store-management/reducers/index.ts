import { combineReducers } from "@reduxjs/toolkit";
import {
  changeLanguageReducer,
  setLanguagesReducer,
} from "./languages-reducers";
import {
  setServerNotificationsReducer,
  toastnotificationReducer,
} from "./server-notifications-reducer";
import { toggleSidebarReducer } from "./other-component-reducers";

const rootReducer = combineReducers({
  serverNotifications: setServerNotificationsReducer,
  toastNotifications: toastnotificationReducer,
  appLanguages: setLanguagesReducer,
  currentLanguage: changeLanguageReducer,
  toggleSidebar: toggleSidebarReducer,
});

export default rootReducer;
