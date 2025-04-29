import {
  verifyIdentityFailure,
  verifyIdentitySuccess,
} from "./../actions/oauth/oauth-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../actions/constants/action-types";
import {
  AuthenticateUserAction,
  AuthenticateUserFailurePayload,
  ForgotPasswordAction,
  ForgotPasswordFailurePayload,
  RegisterAction,
  RegisterFailurePayload,
  ResetPasswordAction,
  ResetPasswordFailurePayload,
  VerifyIdentityAction,
  VerifyIdentityFailurePayload,
  VerifyRegistrationAction,
  VerifyRegistrationFailurePayload,
} from "../actions/oauth";
import {
  authenticateUserFailure,
  authenticateUserSuccess,
  forgotPasswordFailure,
  forgotPasswordSuccess,
  registerFailure,
  registerSuccess,
  resetPasswordFailure,
  resetPasswordSuccess,
  verifyRegistrationFailure,
  verifyRegistrationSuccess,
} from "../actions/oauth/oauth-actions";
import { setStorage } from "@/core/storage/storage";
import { ControllerApi } from "@/features/common/identity/oauth/locale/controller-api";
import { AuthenticationConstants } from "@/core/constants/authentication-contants";

const controllerApi = new ControllerApi();

const callApiToAuthenticateUser = async (command: AuthenticateUserCommand) =>
  controllerApi.authenticateUser(command);

const callApiToRegister = async (command: RegisterCommand) =>
  controllerApi.register(command);

const callApiToVerifyIdentity = async (command: VerifyIdentityCommand) =>
  controllerApi.verifyIdentity(command);

const callApiToVerifyRegistration = async (
  command: VerifyRegistrationCommand
) => controllerApi.verifyRegistration(command);

const callApiToForgotPassword = async (command: ForgotPasswordCommand) =>
  controllerApi.forgotPassword(command);

const callApiToResetPassword = async (command: ResetPasswordCommand) =>
  controllerApi.resetPassword(command);

function* authenticateUserSaga(action: AuthenticateUserAction) {
  try {
    const response: AuthenticateUserResult = yield call(
      callApiToAuthenticateUser,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        if (!response.payload.is_verify_2fa)
          setStorage(
            AuthenticationConstants.ACCESS_TOKEN,
            response.payload.token
          );

        yield put(authenticateUserSuccess(response.payload));
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          authenticateUserFailure({
            errors: messages,
          } as AuthenticateUserFailurePayload)
        );
      }
    } else {
      const messages: string[] = [];
      messages.push("Erreur lors de la connexion au serveur");
      yield put(
        authenticateUserFailure({
          errors: messages,
        } as AuthenticateUserFailurePayload)
      );
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    console.log("E:Message : ", e)
    yield put(
      authenticateUserFailure({
        errors: messages,
      } as AuthenticateUserFailurePayload)
    );
  }
}

function* registerSaga(action: RegisterAction) {
  try {
    const response: RegisterResult = yield call(
      callApiToRegister,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        yield put(registerSuccess(response.payload));
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          registerFailure({
            errors: messages,
          } as RegisterFailurePayload)
        );
      }
    } else {
      const messages: string[] = [];
      messages.push("Erreur lors de la connexion au serveur");
      yield put(
        registerFailure({
          errors: messages,
        } as RegisterFailurePayload)
      );
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      registerFailure({
        errors: messages,
      } as RegisterFailurePayload)
    );
  }
}

function* verifyIdentitySaga(action: VerifyIdentityAction) {
  try {
    const response: VerifyIdentityResult = yield call(
      callApiToVerifyIdentity,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        const token = response.payload.token;
        setStorage(AuthenticationConstants.ACCESS_TOKEN, token);
        yield put(verifyIdentitySuccess(response.payload));
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          verifyIdentityFailure({
            errors: messages,
          } as VerifyIdentityFailurePayload)
        );
      }
    } else {
      const messages: string[] = [];
      messages.push("Erreur lors de la connexion au serveur");
      yield put(
        verifyIdentityFailure({
          errors: messages,
        } as VerifyIdentityFailurePayload)
      );
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      verifyIdentityFailure({
        errors: messages,
      } as VerifyIdentityFailurePayload)
    );
  }
}

function* verifyRegistrationSaga(action: VerifyRegistrationAction) {
  try {
    const response: UpdateStrictResult = yield call(
      callApiToVerifyRegistration,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        yield put(verifyRegistrationSuccess(response.payload));
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          verifyRegistrationFailure({
            errors: messages,
          } as VerifyRegistrationFailurePayload)
        );
      }
    } else {
      const messages: string[] = [];
      messages.push("Erreur lors de la connexion au serveur");
      yield put(
        verifyRegistrationFailure({
          errors: messages,
        } as VerifyRegistrationFailurePayload)
      );
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      verifyRegistrationFailure({
        errors: messages,
      } as VerifyRegistrationFailurePayload)
    );
  }
}

function* forgotPasswordSaga(action: ForgotPasswordAction) {
  try {
    const response: UpdateStrictResult = yield call(
      callApiToForgotPassword,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        yield put(forgotPasswordSuccess(response.payload));
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          forgotPasswordFailure({
            errors: messages,
          } as ForgotPasswordFailurePayload)
        );
      }
    } else {
      const messages: string[] = [];
      messages.push("Erreur lors de la connexion au serveur");
      yield put(
        forgotPasswordFailure({
          errors: messages,
        } as ForgotPasswordFailurePayload)
      );
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      forgotPasswordFailure({
        errors: messages,
      } as ForgotPasswordFailurePayload)
    );
  }
}

function* resetPasswordSaga(action: ResetPasswordAction) {
  try {
    const response: UpdateStrictResult = yield call(
      callApiToResetPassword,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        yield put(resetPasswordSuccess(response.payload));
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          resetPasswordFailure({
            errors: messages,
          } as ResetPasswordFailurePayload)
        );
      }
    } else {
      const messages: string[] = [];
      messages.push("Erreur lors de la connexion au serveur");
      yield put(
        resetPasswordFailure({
          errors: messages,
        } as ResetPasswordFailurePayload)
      );
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      resetPasswordFailure({
        errors: messages,
      } as ResetPasswordFailurePayload)
    );
  }
}

//Watcher: Authenticate user
export function* watchOauthSaga() {
  yield takeLatest(ActionTypes.AUTHENTICATE_USER_REQUEST, authenticateUserSaga);
  yield takeLatest(ActionTypes.REGISTER_REQUEST, registerSaga);
  yield takeLatest(ActionTypes.VERIFY_IDENTITY_REQUEST, verifyIdentitySaga);
  yield takeLatest(
    ActionTypes.VERIFY_REGISTRATION_REQUEST,
    verifyRegistrationSaga
  );
  yield takeLatest(ActionTypes.FORGOT_PASSWORD_REQUEST, forgotPasswordSaga);
  yield takeLatest(ActionTypes.RESET_PASSWORD_REQUEST, resetPasswordSaga);
}

