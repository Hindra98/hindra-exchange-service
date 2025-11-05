interface AuthenticateUserCommand {
  email: string;
  password: string;
  saveSession: boolean;
}
interface AuthenticateUserByGoogleCommand {
  code: string;
}
interface AuthenticateUserByLinkedinCommand {
  code: string;
}
interface AuthenticateUserResult {
  payload: AuthenticateUserSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface AuthenticateUserSuccessPayload {
  id: string;
  email: string;
  role: string;
  token: string;
  message: string;
  is_verified?: boolean;
  is_verify_2fa?: boolean;
  is_connected?: boolean;
  message_email?: string;
}

interface RegisterCommand {
  lastName: string;
  email: string;
  firstName: string;
  password: string;
  confirmPassword: string;
  is_verify_2fa: boolean;
  userlanguage: string;
  theme: string;
}
interface RegisterResult {
  payload: RegisterSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface RegisterSuccessPayload {
  pinCode: string;
  message: string;
}

interface VerifyIdentityCommand {
  id: string;
  token: string;
  otp: string;
}
interface VerifyIdentityResult {
  payload: VerifyIdentitySuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface VerifyIdentitySuccessPayload {
  id: string;
  email: string;
  role: string;
  token: string;
  message: string;
  is_verified: boolean;
  is_connected: boolean;
}

interface ResendPinCodeCommand {
  id: string;
  email: string;
  token: string;
  type?: 0 | 1;
}
interface ResendPinCodeResult {
  payload: ResendPinCodeSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface ResendPinCodeSuccessPayload {
  id: string;
  email: string;
  token: string;
  message: string;
  message_email?: string;
}


interface VerifyRegistrationCommand {
  otp: string;
  token: string;
}
interface ForgotPasswordCommand {
  email: string;
  confirmEmail: string;
}
interface ResetPasswordCommand {
  otp: string;
  token: string;
  password: string;
  confirmPassword: string;
}

interface User {
  detail: string;
  instance: string;
  message: string;
  status: number;
  title: string;
  type: string;
}
