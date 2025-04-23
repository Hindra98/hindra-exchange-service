import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { getStorage } from "@/core/storage/storage";
import { AuthenticationConstants } from "@/core/constants/authentication-contants";
import { Jwt } from "@/core/security/jwt";

const loadAuthenticatedUser = (): AuthenticateUserSuccessPayload => {
  const token = getStorage<string>(AuthenticationConstants.ACCESS_TOKEN);

  const name = token ? Jwt.getClaim(token, "userName") : "";
  const id = token ? Jwt.getClaim(token, "userId") : "";
  const authenticateUser: AuthenticateUserSuccessPayload = {
    userId: id,
    userName: name,
    token: token,
    message: "",
  };
  return authenticateUser;
};

const partialState: Partial<unknown> = {
  authenticatedUser: {
    value: loadAuthenticatedUser(),
  },
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: partialState,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type StoreRedux = typeof store;
