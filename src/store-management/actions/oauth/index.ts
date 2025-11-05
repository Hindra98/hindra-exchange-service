export interface AuthenticateUserStoreShape {
  pending: boolean;
  value: AuthenticateUserSuccessPayload;
  errors: string[];
}
export const initialStateAuthenticateUser: AuthenticateUserStoreShape = {
  value: {
    id: "",
    email: "",
    role: "",
    token: "",
    message: "",
    message_email: "",
    is_verified: false,
    is_verify_2fa: false,
    is_connected: false,
  } as AuthenticateUserSuccessPayload,
  pending: false,
  errors: [],
};
export interface AuthenticateUserModelShape {
  command:
    | AuthenticateUserCommand
    | AuthenticateUserByGoogleCommand
    | AuthenticateUserByLinkedinCommand;
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
  payload:
    | AuthenticateUserCommand
    | AuthenticateUserByGoogleCommand
    | AuthenticateUserByLinkedinCommand;
}
export interface AuthenticateUserPayload {
  command:
    | AuthenticateUserCommand
    | AuthenticateUserByGoogleCommand
    | AuthenticateUserByLinkedinCommand;
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

export interface VerifyIdentityStoreShape {
  pending: boolean;
  value: VerifyIdentitySuccessPayload;
  errors: string[];
}
export const initialStateVerifyIdentity: VerifyIdentityStoreShape = {
  value: {
    id: "",
    email: "",
    role: "",
    token: "",
    message: "",
    is_verified: false,
    is_connected: false,
  } as VerifyIdentitySuccessPayload,
  pending: false,
  errors: [],
};
export interface VerifyIdentityModelShape {
  command: VerifyIdentityCommand;
}
export interface VerifyIdentityFailurePayload {
  errors: string[];
}
export interface VerifyIdentityFailure {
  type: string;
  payload: VerifyIdentityFailurePayload;
}
export interface VerifyIdentitySuccess {
  type: string;
  payload: VerifyIdentitySuccessPayload;
}
export interface VerifyIdentityRequest {
  type: string;
  payload: VerifyIdentityCommand;
}
export interface VerifyIdentityPayload {
  command: VerifyIdentityCommand;
  user: VerifyIdentitySuccessPayload;
  errors: VerifyIdentityFailurePayload;
}
export interface VerifyIdentityAction {
  type: string;
  payload: VerifyIdentityPayload;
}

export interface ResendPinCodeStoreShape {
  pending: boolean;
  value: ResendPinCodeSuccessPayload;
  errors: string[];
}
export const initialStateResendPinCode: ResendPinCodeStoreShape = {
  value: {
    id: "",
    email: "",
    token: "",
    message: "",
    message_email: "",
  } as ResendPinCodeSuccessPayload,
  pending: false,
  errors: [],
};
export interface ResendPinCodeModelShape {
  command: ResendPinCodeCommand;
}
export interface ResendPinCodeFailurePayload {
  errors: string[];
}
export interface ResendPinCodeFailure {
  type: string;
  payload: ResendPinCodeFailurePayload;
}
export interface ResendPinCodeSuccess {
  type: string;
  payload: ResendPinCodeSuccessPayload;
}
export interface ResendPinCodeRequest {
  type: string;
  payload: ResendPinCodeCommand;
}
export interface ResendPinCodePayload {
  command: ResendPinCodeCommand;
  user: ResendPinCodeSuccessPayload;
  errors: ResendPinCodeFailurePayload;
}
export interface ResendPinCodeAction {
  type: string;
  payload: ResendPinCodePayload;
}

export interface VerifyRegistrationStoreShape {
  pending: boolean;
  value: UpdateStrictSuccessPayload;
  errors: string[];
}
export const initialStateVerifyRegistration: VerifyRegistrationStoreShape = {
  value: {
    message: "",
  } as UpdateStrictSuccessPayload,
  pending: false,
  errors: [],
};
export interface VerifyRegistrationModelShape {
  command: VerifyRegistrationCommand;
}
export interface VerifyRegistrationFailurePayload {
  errors: string[];
}
export interface VerifyRegistrationFailure {
  type: string;
  payload: VerifyRegistrationFailurePayload;
}
export interface VerifyRegistrationSuccess {
  type: string;
  payload: UpdateStrictSuccessPayload;
}
export interface VerifyRegistrationRequest {
  type: string;
  payload: VerifyRegistrationCommand;
}
export interface VerifyRegistrationPayload {
  command: VerifyRegistrationCommand;
  user: UpdateStrictSuccessPayload;
  errors: VerifyRegistrationFailurePayload;
}
export interface VerifyRegistrationAction {
  type: string;
  payload: VerifyRegistrationPayload;
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

export interface SignOutStoreShape {
  pending: boolean;
  value: UpdateStrictSuccessPayload;
  errors: string[];
}
export const initialStateSignOut: SignOutStoreShape = {
  value: {
    message: "",
  } as UpdateStrictSuccessPayload,
  pending: false,
  errors: [],
};
export interface SignOutModelShape {
  command: null;
}
export interface SignOutFailurePayload {
  errors: string[];
}
export interface SignOutFailure {
  type: string;
  payload: SignOutFailurePayload;
}
export interface SignOutSuccess {
  type: string;
  payload: UpdateStrictSuccessPayload;
}
export interface SignOutRequest {
  type: string;
  payload: null;
}
export interface SignOutPayload {
  command: null;
  user: UpdateStrictSuccessPayload;
  errors: SignOutFailurePayload;
}
export interface SignOutAction {
  type: string;
  payload: SignOutPayload;
}
