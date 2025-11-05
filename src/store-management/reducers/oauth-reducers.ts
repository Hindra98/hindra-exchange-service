import { produce } from "immer";
import { ActionTypes } from "../actions/constants/action-types";
import {
  AuthenticateUserAction,
  AuthenticateUserStoreShape,
  ForgotPasswordAction,
  ForgotPasswordStoreShape,
  initialStateAuthenticateUser,
  initialStateForgotPassword,
  initialStateRegister,
  initialStateResendPinCode,
  initialStateResetPassword,
  initialStateSignOut,
  initialStateVerifyIdentity,
  initialStateVerifyRegistration,
  RegisterAction,
  RegisterStoreShape,
  ResendPinCodeAction,
  ResendPinCodeStoreShape,
  ResetPasswordAction,
  ResetPasswordStoreShape,
  SignOutAction,
  SignOutStoreShape,
  VerifyIdentityAction,
  VerifyIdentityStoreShape,
  VerifyRegistrationAction,
  VerifyRegistrationStoreShape,
} from "../actions/oauth";

export const authenticatedUserReducer = (
  state: AuthenticateUserStoreShape = initialStateAuthenticateUser,
  args: AuthenticateUserAction
): AuthenticateUserStoreShape => {
  switch (args.type) {
    case ActionTypes.AUTHENTICATE_USER_REQUEST ||
      ActionTypes.AUTHENTICATE_USER_BY_GOOGLE_REQUEST ||
      ActionTypes.AUTHENTICATE_USER_BY_LINKEDIN_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.AUTHENTICATE_USER_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.message = args.payload?.user?.message;
        draftState.value.id = args.payload?.user?.id;
        draftState.value.email = args.payload?.user?.email;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.role = args.payload?.user?.role;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.value.is_connected = args.payload?.user?.is_connected;
        draftState.value.is_verified = args.payload?.user?.is_verified;
        draftState.value.is_verify_2fa = args.payload?.user?.is_verify_2fa;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.AUTHENTICATE_USER_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const registerReducer = (
  state: RegisterStoreShape = initialStateRegister,
  args: RegisterAction
): RegisterStoreShape => {
  switch (args.type) {
    case ActionTypes.REGISTER_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.REGISTER_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.message = args.payload?.user?.message;
        draftState.value.pinCode = args.payload?.user?.pinCode;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.REGISTER_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const verifyIdentityReducer = (
  state: VerifyIdentityStoreShape = initialStateVerifyIdentity,
  args: VerifyIdentityAction
): VerifyIdentityStoreShape => {
  switch (args.type) {
    case ActionTypes.VERIFY_IDENTITY_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.VERIFY_IDENTITY_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.message = args.payload?.user?.message;
        draftState.value.id = args.payload?.user?.id;
        draftState.value.email = args.payload?.user?.email;
        draftState.value.role = args.payload?.user?.role;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.is_connected = args.payload?.user?.is_connected;
        draftState.value.is_verified = args.payload?.user?.is_verified;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.VERIFY_IDENTITY_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const resendPinCodeReducer = (
  state: ResendPinCodeStoreShape = initialStateResendPinCode,
  args: ResendPinCodeAction
): ResendPinCodeStoreShape => {
  switch (args.type) {
    case ActionTypes.RESEND_PIN_CODE_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.RESEND_PIN_CODE_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.id = args.payload?.user?.id;
        draftState.value.email = args.payload?.user?.email;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.RESEND_PIN_CODE_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const verifyRegistrationReducer = (
  state: VerifyRegistrationStoreShape = initialStateVerifyRegistration,
  args: VerifyRegistrationAction
): VerifyRegistrationStoreShape => {
  switch (args.type) {
    case ActionTypes.VERIFY_REGISTRATION_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.VERIFY_REGISTRATION_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.message = args.payload?.user?.message;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.VERIFY_REGISTRATION_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const forgotPasswordReducer = (
  state: ForgotPasswordStoreShape = initialStateForgotPassword,
  args: ForgotPasswordAction
): ForgotPasswordStoreShape => {
  switch (args.type) {
    case ActionTypes.FORGOT_PASSWORD_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.FORGOT_PASSWORD_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.message = args.payload?.user?.message;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.FORGOT_PASSWORD_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const resetPasswordReducer = (
  state: ResetPasswordStoreShape = initialStateResetPassword,
  args: ResetPasswordAction
): ResetPasswordStoreShape => {
  switch (args.type) {
    case ActionTypes.RESET_PASSWORD_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.RESET_PASSWORD_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.message = args.payload?.user?.message;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.RESET_PASSWORD_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const signOutReducer = (
  state: SignOutStoreShape = initialStateSignOut,
  args: SignOutAction
): SignOutStoreShape => {
  switch (args.type) {
    case ActionTypes.SIGN_OUT_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.SIGN_OUT_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.message = args.payload?.user?.message;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.SIGN_OUT_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};
