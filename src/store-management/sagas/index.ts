import { all, fork } from "redux-saga/effects";
import { watchOauthSaga } from "./oauth-saga";
import { watchProfileSaga } from "./profile-saga";
import { watchCategorySaga } from "./category-saga";

export default function* rootSaga() {
  yield all([fork(watchOauthSaga)]);
  yield all([fork(watchProfileSaga)]);
  yield all([fork(watchCategorySaga)]);
}
