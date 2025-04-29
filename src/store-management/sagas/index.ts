import { all, fork } from "redux-saga/effects";
import { watchOauthSaga } from "./oauth-saga";

export default function* rootSaga() {
  yield all([fork(watchOauthSaga)]);
}
