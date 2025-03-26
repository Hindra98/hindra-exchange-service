import { takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../actions/constants/action-types";
import { SharedConstants } from "../../core/constants/common-constants";
import { setStorage } from "../../core/storage/storage";

function toggleSidebarSaga(action) {
  try {
    if (action.payload.query) {
      setStorage(SharedConstants.TOGGLE_SIDEBAR, action.payload.query);
    }
  } catch (e) {}
}

//Getlanguages watcher
export function* watchGetOtherComponentSaga() {
  yield takeLatest(ActionTypes.TOGGLE_SIDEBAR, toggleSidebarSaga);
}
