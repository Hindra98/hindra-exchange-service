export interface AuthenticateUserStoreShape {
  pending: boolean;
  value: AuthenticateUserSuccessPayload;
  errors: string[];
}
export const initialStateAuthenticateUser: AuthenticateUserStoreShape = {
  value: {
    userId: "",
    userName: "",
    token: "",
    message: "",
  } as AuthenticateUserSuccessPayload,
  pending: false,
  errors: [],
};
export interface AuthenticateUserModelShape {
  command: AuthenticateUserCommand;
}
export interface AuthenticateUserFailurePayload {
  errors: string[];
}
export interface AuthenticateUserFailure {
  type: string;
  payload: AuthenticateUserFailurePayload;
}
export interface AuthenticateUserSuccess {
  type: string;
  payload: AuthenticateUserSuccessPayload;
}
export interface AuthenticateUserRequest {
  type: string;
  payload: AuthenticateUserCommand;
}
export interface AuthenticateUserPayload {
  command: AuthenticateUserCommand;
  user: AuthenticateUserSuccessPayload;
  errors: AuthenticateUserFailurePayload;
}
export interface AuthenticateUserAction {
  type: string;
  payload: AuthenticateUserPayload;
}

export interface RegisterStoreShape {
  pending: boolean;
  value: RegisterSuccessPayload;
  errors: string[];
}
export const initialStateRegister: RegisterStoreShape = {
  value: {
    message: "",
    pinCode: "",
  } as RegisterSuccessPayload,
  pending: false,
  errors: [],
};
export interface RegisterModelShape {
  command: RegisterCommand;
}
export interface RegisterFailurePayload {
  errors: string[];
}
export interface RegisterFailure {
  type: string;
  payload: RegisterFailurePayload;
}
export interface RegisterSuccess {
  type: string;
  payload: RegisterSuccessPayload;
}
export interface RegisterRequest {
  type: string;
  payload: RegisterCommand;
}
export interface RegisterPayload {
  command: RegisterCommand;
  user: RegisterSuccessPayload;
  errors: RegisterFailurePayload;
}
export interface RegisterAction {
  type: string;
  payload: RegisterPayload;
}

export interface ForgotPasswordStoreShape {
  pending: boolean;
  value: UpdateStrictSuccessPayload;
  errors: string[];
}
export const initialStateForgotPassword: ForgotPasswordStoreShape = {
  value: {
    message: "",
  } as UpdateStrictSuccessPayload,
  pending: false,
  errors: [],
};
export interface ForgotPasswordModelShape {
  command: ForgotPasswordCommand;
}
export interface ForgotPasswordFailurePayload {
  errors: string[];
}
export interface ForgotPasswordFailure {
  type: string;
  payload: ForgotPasswordFailurePayload;
}
export interface ForgotPasswordSuccess {
  type: string;
  payload: UpdateStrictSuccessPayload;
}
export interface ForgotPasswordRequest {
  type: string;
  payload: ForgotPasswordCommand;
}
export interface ForgotPasswordPayload {
  command: ForgotPasswordCommand;
  user: UpdateStrictSuccessPayload;
  errors: ForgotPasswordFailurePayload;
}
export interface ForgotPasswordAction {
  type: string;
  payload: ForgotPasswordPayload;
}

export interface ResetPasswordStoreShape {
  pending: boolean;
  value: UpdateStrictSuccessPayload;
  errors: string[];
}
export const initialStateResetPassword: ResetPasswordStoreShape = {
  value: {
    message: "",
  } as UpdateStrictSuccessPayload,
  pending: false,
  errors: [],
};
export interface ResetPasswordModelShape {
  command: ResetPasswordCommand;
}
export interface ResetPasswordFailurePayload {
  errors: string[];
}
export interface ResetPasswordFailure {
  type: string;
  payload: ResetPasswordFailurePayload;
}
export interface ResetPasswordSuccess {
  type: string;
  payload: UpdateStrictSuccessPayload;
}
export interface ResetPasswordRequest {
  type: string;
  payload: ResetPasswordCommand;
}
export interface ResetPasswordPayload {
  command: ResetPasswordCommand;
  user: UpdateStrictSuccessPayload;
  errors: ResetPasswordFailurePayload;
}
export interface ResetPasswordAction {
  type: string;
  payload: ResetPasswordPayload;
}
