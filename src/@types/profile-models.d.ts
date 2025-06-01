interface ProfileUser {
  id?: string;
  userId?: string;
  fullName: string;
  phone?: string;
  gender?: string;
  picture?: string;
  linkedin?: string;
  google?: string;
}
interface Profile {
  id: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  gender: string;
  picture?: string;
  userlanguage: string;
  theme: string;
  role: string;
  website: string;
  github: string;
  linkedin: string;
  notify_email: boolean;
  notify_phone: boolean;
  notify_in_app: boolean;
}

interface ProfilesSuccessPayload {
  profiles?: Profile[];
  token: string;
  message: string;
  message_email?: string;
}
interface ProfilesResult {
  payload: ProfilesSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}

interface ProfileUserCommand {
  id?: string;
  userId?: string;
}

interface ProfileUserResult {
  payload: ProfileUserSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface ProfileUserSuccessPayload {
  id: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  gender: string;
  picture?: string;
  userlanguage: string;
  theme: string;
  role: string;
  website: string;
  github: string;
  linkedin: string;
  notify_email: boolean;
  notify_phone: boolean;
  notify_in_app: boolean;
  token: string;
  message: string;
  message_email?: string;
}
interface DeleteProfileCommand {
  id: string;
}
interface DeleteProfileResult {
  payload: DeleteProfileSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface DeleteProfileSuccessPayload {
  profiles: Profile[];
  token: string;
  message: string;
  message_email?: string;
}
interface UpdateProfileCommand {
  lastname: string;
  firstname: string;
  gender: string;
}
interface UpdateProfileResult {
  payload: UpdateProfileSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface UpdateProfileSuccessPayload {
  id: string;
  lastname: string;
  firstname: string;
  gender: string;
  token: string;
  message: string;
  message_email?: string;
}

interface UpdateParamsCommand {
  userlanguage: string;
  theme: string;
}
interface UpdateParamsResult {
  payload: UpdateParamsSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface UpdateParamsSuccessPayload {
  userlanguage: string;
  theme: string;
  token: string;
  message: string;
  message_email?: string;
}

interface UpdatePictureCommand {
  picture: File;
  destination?: "profile" | "benefit";
}
interface UpdatePictureResult {
  payload: UpdatePictureSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface UpdatePictureSuccessPayload {
  picture: string;
  token: string;
  message: string;
  message_email?: string;
}

interface UpdateEmailCommand {
  email: string;
  confirmEmail: string;
}
interface UpdateEmailResult {
  payload: UpdateEmailSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface UpdateEmailSuccessPayload {
  email: string;
  token: string;
  message: string;
  message_email?: string;
}

interface UpdateOtpEmailCommand {
  email: string;
  otp: string;
}
interface UpdateOtpEmailResult {
  payload: UpdateOtpEmailSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface UpdateOtpEmailSuccessPayload {
  email: string;
  token: string;
  message: string;
  message_email?: string;
}

interface UpdatePhoneCommand {
  phone: string;
  confirmPhone: string;
}
interface UpdatePhoneResult {
  payload: UpdatePhoneSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface UpdatePhoneSuccessPayload {
  phone: string;
  token: string;
  message: string;
  message_email?: string;
}

interface UpdateWebsiteCommand {
  linkedin: string;
  website: string;
  github: string;
}
interface UpdateWebsiteResult {
  payload: UpdateWebsiteSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface UpdateWebsiteSuccessPayload {
  linkedin: string;
  website: string;
  github: string;
  token: string;
  message: string;
  message_email?: string;
}

interface UpdateNotificationCommand {
  notify_email: boolean;
  notify_phone: boolean;
  notify_in_app: boolean;
}
interface UpdateNotificationResult {
  payload: UpdateNotificationSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface UpdateNotificationSuccessPayload {
  notify_email: boolean;
  notify_phone: boolean;
  notify_in_app: boolean;
  token: string;
  message: string;
  message_email?: string;
}
