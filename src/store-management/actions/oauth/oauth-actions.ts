import { setStorage } from "@/core/storage/storage";
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
} from ".";
import { ActionTypes } from "../constants/action-types";
import { AuthenticationConstants } from "@/core/constants/authentication-contants";

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
  setStorage(AuthenticationConstants.ACCESS_TOKEN, payload.token);
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

export const verifyIdentity = (
  payload: VerifyIdentityCommand
): VerifyIdentityAction => {
  return {
    type: ActionTypes.VERIFY_IDENTITY_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as VerifyIdentityAction;
};
export const verifyIdentitySuccess = (
  payload: VerifyIdentitySuccessPayload
): VerifyIdentityAction => {
  return {
    type: ActionTypes.VERIFY_IDENTITY_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as VerifyIdentityAction;
};
export const verifyIdentityFailure = (
  payload: VerifyIdentityFailurePayload
): VerifyIdentityAction => {
  return {
    type: ActionTypes.VERIFY_IDENTITY_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as VerifyIdentityAction;
};

export const resendPinCode = (
  payload: ResendPinCodeCommand
): ResendPinCodeAction => {
  return {
    type: ActionTypes.RESEND_PIN_CODE_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as ResendPinCodeAction;
};
export const resendPinCodeSuccess = (
  payload: ResendPinCodeSuccessPayload
): ResendPinCodeAction => {
  return {
    type: ActionTypes.RESEND_PIN_CODE_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as ResendPinCodeAction;
};
export const resendPinCodeFailure = (
  payload: ResendPinCodeFailurePayload
): ResendPinCodeAction => {
  return {
    type: ActionTypes.RESEND_PIN_CODE_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as ResendPinCodeAction;
};

export const verifyRegistration = (
  payload: VerifyRegistrationCommand
): VerifyRegistrationAction => {
  return {
    type: ActionTypes.VERIFY_REGISTRATION_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as VerifyRegistrationAction;
};
export const verifyRegistrationSuccess = (
  payload: UpdateStrictSuccessPayload
): VerifyRegistrationAction => {
  return {
    type: ActionTypes.VERIFY_REGISTRATION_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as VerifyRegistrationAction;
};
export const verifyRegistrationFailure = (
  payload: VerifyRegistrationFailurePayload
): VerifyRegistrationAction => {
  return {
    type: ActionTypes.VERIFY_REGISTRATION_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as VerifyRegistrationAction;
};

export const forgotPassword = (
  payload: ForgotPasswordCommand
): ForgotPasswordAction => {
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

export const resetPassword = (
  payload: ResetPasswordCommand
): ResetPasswordAction => {
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

export const signOut = (payload: null): SignOutAction => {
  return {
    type: ActionTypes.SIGN_OUT_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as SignOutAction;
};
export const signOutSuccess = (
  payload: UpdateStrictSuccessPayload
): SignOutAction => {
  return {
    type: ActionTypes.SIGN_OUT_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as SignOutAction;
};
export const signOutFailure = (
  payload: SignOutFailurePayload
): SignOutAction => {
  return {
    type: ActionTypes.SIGN_OUT_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as SignOutAction;
};
