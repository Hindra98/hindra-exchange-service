import {
  resendPinCodeFailure,
  resendPinCodeSuccess,
  signOutFailure,
  signOutSuccess,
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
  ResendPinCodeAction,
  ResendPinCodeFailurePayload,
  ResetPasswordAction,
  ResetPasswordFailurePayload,
  SignOutAction,
  SignOutFailurePayload,
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
import { getStorage, setStorage } from "@/core/storage/storage";
import { ControllerApi } from "@/features/common/identity/oauth/locale/controller-api";
import { AuthenticationConstants } from "@/core/constants/authentication-contants";
import {
  showToastNotificationError,
  showToastNotificationSuccess,
} from "../actions/server-notifications/server-notifications-action";
import { errorServerHttpConstant } from "@/core/constants/errors-contants";

const controllerApi = new ControllerApi();

const callApiToAuthenticateUser = async (command: AuthenticateUserCommand) =>
  controllerApi.authenticateUser(command);

const callApiToRegister = async (command: RegisterCommand) =>
  controllerApi.register(command);

const callApiToVerifyIdentity = async (command: VerifyIdentityCommand) =>
  controllerApi.verifyIdentity(command);

const callApiToResendPinCode = async (command: ResendPinCodeCommand) =>
  controllerApi.resendPinCode(command);

const callApiToVerifyRegistration = async (
  command: VerifyRegistrationCommand
) => controllerApi.verifyRegistration(command);

const callApiToForgotPassword = async (command: ForgotPasswordCommand) =>
  controllerApi.forgotPassword(command);

const callApiToResetPassword = async (command: ResetPasswordCommand) =>
  controllerApi.resetPassword(command);

const callApiToSignOut = async (command: null) =>
  controllerApi.signOut(command);

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
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
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
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        authenticateUserFailure({
          errors: messages,
        } as AuthenticateUserFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      authenticateUserFailure({
        errors: messages,
      } as AuthenticateUserFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
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
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
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
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        registerFailure({
          errors: messages,
        } as RegisterFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      registerFailure({
        errors: messages,
      } as RegisterFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
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
        setStorage(
          AuthenticationConstants.ACCESS_TOKEN,
          response.payload.token
        );
        yield put(verifyIdentitySuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
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
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        verifyIdentityFailure({
          errors: messages,
        } as VerifyIdentityFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      verifyIdentityFailure({
        errors: messages,
      } as VerifyIdentityFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* resendPinCodeSaga(action: ResendPinCodeAction) {
  try {
    const response: ResendPinCodeResult = yield call(
      callApiToResendPinCode,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        const token = response.payload.token;
        setStorage(AuthenticationConstants.ACCESS_TOKEN, token);
        yield put(authenticateUserSuccess({ ...response.payload, role: "" }));
        yield put(resendPinCodeSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          resendPinCodeFailure({
            errors: messages,
          } as ResendPinCodeFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        resendPinCodeFailure({
          errors: messages,
        } as ResendPinCodeFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      resendPinCodeFailure({
        errors: messages,
      } as ResendPinCodeFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
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
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
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
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        verifyRegistrationFailure({
          errors: messages,
        } as VerifyRegistrationFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      verifyRegistrationFailure({
        errors: messages,
      } as VerifyRegistrationFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
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
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
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
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        forgotPasswordFailure({
          errors: messages,
        } as ForgotPasswordFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      forgotPasswordFailure({
        errors: messages,
      } as ForgotPasswordFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
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
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
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
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        resetPasswordFailure({
          errors: messages,
        } as ResetPasswordFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      resetPasswordFailure({
        errors: messages,
      } as ResetPasswordFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* signOutSaga(action: SignOutAction) {
  try {
    const response: UpdateStrictResult = yield call(
      callApiToSignOut,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        getStorage(AuthenticationConstants.ACCESS_TOKEN, true);
        yield put(signOutSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          signOutFailure({
            errors: messages,
          } as SignOutFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        signOutFailure({
          errors: messages,
        } as SignOutFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      signOutFailure({
        errors: messages,
      } as SignOutFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

//Watcher: Authenticate user
export function* watchOauthSaga() {
  yield takeLatest(ActionTypes.AUTHENTICATE_USER_REQUEST, authenticateUserSaga);
  yield takeLatest(ActionTypes.REGISTER_REQUEST, registerSaga);
  yield takeLatest(ActionTypes.VERIFY_IDENTITY_REQUEST, verifyIdentitySaga);
  yield takeLatest(ActionTypes.RESEND_PIN_CODE_REQUEST, resendPinCodeSaga);
  yield takeLatest(
    ActionTypes.VERIFY_REGISTRATION_REQUEST,
    verifyRegistrationSaga
  );
  yield takeLatest(ActionTypes.FORGOT_PASSWORD_REQUEST, forgotPasswordSaga);
  yield takeLatest(ActionTypes.RESET_PASSWORD_REQUEST, resetPasswordSaga);
  yield takeLatest(ActionTypes.SIGN_OUT_REQUEST, signOutSaga);
}
