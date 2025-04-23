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
  initialStateResetPassword,
  RegisterAction,
  RegisterStoreShape,
  ResetPasswordAction,
  ResetPasswordStoreShape,
} from "../actions/oauth";

export const authenticatedUserReducer = (
  state: AuthenticateUserStoreShape = initialStateAuthenticateUser,
  args: AuthenticateUserAction
): AuthenticateUserStoreShape => {
  switch (args.type) {
    case ActionTypes.AUTHENTICATE_USER_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.AUTHENTICATE_USER_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.message = args.payload?.user?.message;
        draftState.value.userId = args.payload?.user?.userId;
        draftState.value.userName = args.payload?.user?.userName;
        draftState.value.token = args.payload?.user?.token;
        //  draftState.value.userName = Jwt.getClaim(args.payload?.user?.token, "name");
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
