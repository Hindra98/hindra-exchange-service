interface AuthenticateUserCommand {
  email: string;
  password: string;
  saveSession: boolean;
}
interface AuthenticateUserResult {
  payload: AuthenticateUserSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface AuthenticateUserSuccessPayload {
  userId: string;
  userName: string;
  token: string;
  message: string;
}

interface RegisterCommand {
  lastName: string;
  email: string;
  firstName: string;
  password: string;
  confirmPassword: string;
  checkedRole: boolean;
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

interface ForgotPasswordCommand {
  email: string;
  confirmEmail: string;
}

interface ResetPasswordCommand {
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
