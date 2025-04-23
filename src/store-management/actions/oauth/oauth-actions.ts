import {
  AuthenticateUserAction,
  AuthenticateUserFailurePayload,
  ForgotPasswordAction,
  ForgotPasswordFailurePayload,
  RegisterAction,
  RegisterFailurePayload,
  ResetPasswordAction,
  ResetPasswordFailurePayload,
} from ".";
import { ActionTypes } from "../constants/action-types";

export const authenticateUser = (
  payload: AuthenticateUserCommand
): AuthenticateUserAction => {
  return {
    type: ActionTypes.AUTHENTICATE_USER_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as AuthenticateUserAction;
};
export const authenticateUserSuccess = (
  payload: AuthenticateUserSuccessPayload
): AuthenticateUserAction => {
  return {
    type: ActionTypes.AUTHENTICATE_USER_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as AuthenticateUserAction;
};
export const authenticateUserFailure = (
  payload: AuthenticateUserFailurePayload
): AuthenticateUserAction => {
  return {
    type: ActionTypes.AUTHENTICATE_USER_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as AuthenticateUserAction;
};

export const register = (payload: RegisterCommand): RegisterAction => {
  return {
    type: ActionTypes.REGISTER_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as RegisterAction;
};
export const registerSuccess = (
  payload: RegisterSuccessPayload
): RegisterAction => {
  return {
    type: ActionTypes.REGISTER_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as RegisterAction;
};
export const registerFailure = (
  payload: RegisterFailurePayload
): RegisterAction => {
  return {
    type: ActionTypes.REGISTER_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as RegisterAction;
};

export const forgotPassword = (payload: ForgotPasswordCommand): ForgotPasswordAction => {
  return {
    type: ActionTypes.FORGOT_PASSWORD_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as ForgotPasswordAction;
};
export const forgotPasswordSuccess = (
  payload: UpdateStrictSuccessPayload
): ForgotPasswordAction => {
  return {
    type: ActionTypes.FORGOT_PASSWORD_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as ForgotPasswordAction;
};
export const forgotPasswordFailure = (
  payload: ForgotPasswordFailurePayload
): ForgotPasswordAction => {
  return {
    type: ActionTypes.FORGOT_PASSWORD_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as ForgotPasswordAction;
};

export const resetPassword = (payload: ResetPasswordCommand): ResetPasswordAction => {
  return {
    type: ActionTypes.RESET_PASSWORD_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as ResetPasswordAction;
};
export const resetPasswordSuccess = (
  payload: UpdateStrictSuccessPayload
): ResetPasswordAction => {
  return {
    type: ActionTypes.RESET_PASSWORD_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as ResetPasswordAction;
};
export const resetPasswordFailure = (
  payload: ResetPasswordFailurePayload
): ResetPasswordAction => {
  return {
    type: ActionTypes.RESET_PASSWORD_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as ResetPasswordAction;
};
