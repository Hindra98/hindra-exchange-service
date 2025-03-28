import { all, fork } from "redux-saga/effects";
import { watchGetOtherComponentSaga } from "./other-component-sagas";
import { watchGetLanguagesSaga } from "./languages-sagas";

export default function* rootSaga() {
  yield all([
    fork(watchGetLanguagesSaga),
    fork(watchGetOtherComponentSaga),
  ]);
}

export const getClaim = (decodedToken: string, claimKkey: string): string => {
  let claim = "";
  decodedToken
    .split(",")
    .filter((key) => key.toLocaleLowerCase().includes(`${claimKkey}`))
    .forEach((value) => {
      const element = value.split(":");
      const urlParams = element[1].split("/");
      const claimValue = urlParams[urlParams.length - 1].slice(0, -1);
      if (claimValue.toLocaleLowerCase() === claimKkey.toLocaleLowerCase())
        claim = element[2].slice(1, element[2].length - 1);
    });
  return claim;
};
