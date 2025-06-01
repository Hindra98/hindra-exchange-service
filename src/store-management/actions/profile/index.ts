export interface ProfileUserStoreShape {
  pending: boolean;
  value: ProfileUserSuccessPayload;
  errors: string[];
}
export const initialStateProfileUser: ProfileUserStoreShape = {
  value: {
    id: "",
    lastname: "",
    firstname: "",
    gender: "",
    email: "",
    phone: "",
    picture: "",
    userlanguage: "",
    theme: "",
    role: "",
    linkedin: "",
    website: "",
    github: "",
    notify_email: true,
    notify_phone: false,
    notify_in_app: true,
    token: "",
    message: "",
    message_email: "",
  } as ProfileUserSuccessPayload,
  pending: false,
  errors: [],
};
export interface ProfileUserModelShape {
  command: ProfileUserCommand;
}
export interface ProfileUserFailurePayload {
  errors: string[];
}
export interface ProfileUserFailure {
  type: string;
  payload: ProfileUserFailurePayload;
}
export interface ProfileUserSuccess {
  type: string;
  payload: ProfileUserSuccessPayload;
}
export interface ProfileUserRequest {
  type: string;
  payload: ProfileUserCommand;
}
export interface ProfileUserPayload {
  command: ProfileUserCommand;
  user: ProfileUserSuccessPayload;
  errors: ProfileUserFailurePayload;
}
export interface ProfileUserAction {
  type: string;
  payload: ProfileUserPayload;
}

export interface ProfilesStoreShape {
  pending: boolean;
  value: ProfilesSuccessPayload;
  errors: string[];
}
export const initialStateProfiles: ProfilesStoreShape = {
  value: {
    profiles: [],
    token: "",
    message: "",
    message_email: "",
  } as ProfilesSuccessPayload,
  pending: false,
  errors: [],
};
export interface ProfilesModelShape {
  command: null;
}
export interface ProfilesFailurePayload {
  errors: string[];
}
export interface ProfilesFailure {
  type: string;
  payload: ProfilesFailurePayload;
}
export interface ProfilesSuccess {
  type: string;
  payload: ProfilesSuccessPayload;
}
export interface ProfilesRequest {
  type: string;
  payload: null;
}
export interface ProfilesPayload {
  command: null;
  user: ProfilesSuccessPayload;
  errors: ProfilesFailurePayload;
}
export interface ProfilesAction {
  type: string;
  payload: ProfilesPayload;
}

export interface DeleteProfileStoreShape {
  pending: boolean;
  value: DeleteProfileSuccessPayload;
  errors: string[];
}
export const initialStateDeleteProfile: DeleteProfileStoreShape = {
  value: {
    profiles: [],
    token: "",
    message: "",
    message_email: "",
  } as DeleteProfileSuccessPayload,
  pending: false,
  errors: [],
};
export interface DeleteProfileModelShape {
  command: DeleteProfileCommand;
}
export interface DeleteProfileFailurePayload {
  errors: string[];
}
export interface DeleteProfileFailure {
  type: string;
  payload: DeleteProfileFailurePayload;
}
export interface DeleteProfileSuccess {
  type: string;
  payload: DeleteProfileSuccessPayload;
}
export interface DeleteProfileRequest {
  type: string;
  payload: DeleteProfileCommand;
}
export interface DeleteProfilePayload {
  command: DeleteProfileCommand;
  user: DeleteProfileSuccessPayload;
  errors: DeleteProfileFailurePayload;
}
export interface DeleteProfileAction {
  type: string;
  payload: DeleteProfilePayload;
}

export interface UpdateProfileStoreShape {
  pending: boolean;
  value: UpdateProfileSuccessPayload;
  errors: string[];
}
export const initialStateUpdateProfile: UpdateProfileStoreShape = {
  value: {
    id: "",
    lastname: "",
    firstname: "",
    gender: "",
    token: "",
    message: "",
    message_email: "",
  } as UpdateProfileSuccessPayload,
  pending: false,
  errors: [],
};
export interface UpdateProfileModelShape {
  command: UpdateProfileCommand;
}
export interface UpdateProfileFailurePayload {
  errors: string[];
}
export interface UpdateProfileFailure {
  type: string;
  payload: UpdateProfileFailurePayload;
}
export interface UpdateProfileSuccess {
  type: string;
  payload: UpdateProfileSuccessPayload;
}
export interface UpdateProfileRequest {
  type: string;
  payload: UpdateProfileCommand;
}
export interface UpdateProfilePayload {
  command: UpdateProfileCommand;
  user: UpdateProfileSuccessPayload;
  errors: UpdateProfileFailurePayload;
}
export interface UpdateProfileAction {
  type: string;
  payload: UpdateProfilePayload;
}

export interface UpdateParamsStoreShape {
  pending: boolean;
  value: UpdateParamsSuccessPayload;
  errors: string[];
}
export const initialStateUpdateParams: UpdateParamsStoreShape = {
  value: {
    userlanguage: "",
    theme: "",
    token: "",
    message: "",
    message_email: "",
  } as UpdateParamsSuccessPayload,
  pending: false,
  errors: [],
};
export interface UpdateParamsModelShape {
  command: UpdateParamsCommand;
}
export interface UpdateParamsFailurePayload {
  errors: string[];
}
export interface UpdateParamsFailure {
  type: string;
  payload: UpdateParamsFailurePayload;
}
export interface UpdateParamsSuccess {
  type: string;
  payload: UpdateParamsSuccessPayload;
}
export interface UpdateParamsRequest {
  type: string;
  payload: UpdateParamsCommand;
}
export interface UpdateParamsPayload {
  command: UpdateParamsCommand;
  user: UpdateParamsSuccessPayload;
  errors: UpdateParamsFailurePayload;
}
export interface UpdateParamsAction {
  type: string;
  payload: UpdateParamsPayload;
}

export interface UpdateEmailStoreShape {
  pending: boolean;
  value: UpdateEmailSuccessPayload;
  errors: string[];
}
export const initialStateUpdateEmail: UpdateEmailStoreShape = {
  value: {
    email: "",
    token: "",
    message: "",
    message_email: "",
  } as UpdateEmailSuccessPayload,
  pending: false,
  errors: [],
};
export interface UpdateEmailModelShape {
  command: UpdateEmailCommand;
}
export interface UpdateEmailFailurePayload {
  errors: string[];
}
export interface UpdateEmailFailure {
  type: string;
  payload: UpdateEmailFailurePayload;
}
export interface UpdateEmailSuccess {
  type: string;
  payload: UpdateEmailSuccessPayload;
}
export interface UpdateEmailRequest {
  type: string;
  payload: UpdateEmailCommand;
}
export interface UpdateEmailPayload {
  command: UpdateEmailCommand;
  user: UpdateEmailSuccessPayload;
  errors: UpdateEmailFailurePayload;
}
export interface UpdateEmailAction {
  type: string;
  payload: UpdateEmailPayload;
}

export interface UpdateOtpEmailStoreShape {
  pending: boolean;
  value: UpdateOtpEmailSuccessPayload;
  errors: string[];
}
export const initialStateUpdateOtpEmail: UpdateOtpEmailStoreShape = {
  value: {
    email: "",
    token: "",
    message: "",
    message_email: "",
  } as UpdateOtpEmailSuccessPayload,
  pending: false,
  errors: [],
};
export interface UpdateOtpEmailModelShape {
  command: UpdateOtpEmailCommand;
}
export interface UpdateOtpEmailFailurePayload {
  errors: string[];
}
export interface UpdateOtpEmailFailure {
  type: string;
  payload: UpdateOtpEmailFailurePayload;
}
export interface UpdateOtpEmailSuccess {
  type: string;
  payload: UpdateOtpEmailSuccessPayload;
}
export interface UpdateOtpEmailRequest {
  type: string;
  payload: UpdateOtpEmailCommand;
}
export interface UpdateOtpEmailPayload {
  command: UpdateOtpEmailCommand;
  user: UpdateOtpEmailSuccessPayload;
  errors: UpdateOtpEmailFailurePayload;
}
export interface UpdateOtpEmailAction {
  type: string;
  payload: UpdateOtpEmailPayload;
}

export interface UpdatePhoneStoreShape {
  pending: boolean;
  value: UpdatePhoneSuccessPayload;
  errors: string[];
}
export const initialStateUpdatePhone: UpdatePhoneStoreShape = {
  value: {
    phone: "",
    token: "",
    message: "",
    message_email: "",
  } as UpdatePhoneSuccessPayload,
  pending: false,
  errors: [],
};
export interface UpdatePhoneModelShape {
  command: UpdatePhoneCommand;
}
export interface UpdatePhoneFailurePayload {
  errors: string[];
}
export interface UpdatePhoneFailure {
  type: string;
  payload: UpdatePhoneFailurePayload;
}
export interface UpdatePhoneSuccess {
  type: string;
  payload: UpdatePhoneSuccessPayload;
}
export interface UpdatePhoneRequest {
  type: string;
  payload: UpdatePhoneCommand;
}
export interface UpdatePhonePayload {
  command: UpdatePhoneCommand;
  user: UpdatePhoneSuccessPayload;
  errors: UpdatePhoneFailurePayload;
}
export interface UpdatePhoneAction {
  type: string;
  payload: UpdatePhonePayload;
}

export interface UpdateWebsiteStoreShape {
  pending: boolean;
  value: UpdateWebsiteSuccessPayload;
  errors: string[];
}
export const initialStateUpdateWebsite: UpdateWebsiteStoreShape = {
  value: {
    linkedin: "",
    website: "",
    github: "",
    token: "",
    message: "",
    message_email: "",
  } as UpdateWebsiteSuccessPayload,
  pending: false,
  errors: [],
};
export interface UpdateWebsiteModelShape {
  command: UpdateWebsiteCommand;
}
export interface UpdateWebsiteFailurePayload {
  errors: string[];
}
export interface UpdateWebsiteFailure {
  type: string;
  payload: UpdateWebsiteFailurePayload;
}
export interface UpdateWebsiteSuccess {
  type: string;
  payload: UpdateWebsiteSuccessPayload;
}
export interface UpdateWebsiteRequest {
  type: string;
  payload: UpdateWebsiteCommand;
}
export interface UpdateWebsitePayload {
  command: UpdateWebsiteCommand;
  user: UpdateWebsiteSuccessPayload;
  errors: UpdateWebsiteFailurePayload;
}
export interface UpdateWebsiteAction {
  type: string;
  payload: UpdateWebsitePayload;
}

export interface UpdateNotificationStoreShape {
  pending: boolean;
  value: UpdateNotificationSuccessPayload;
  errors: string[];
}
export const initialStateUpdateNotification: UpdateNotificationStoreShape = {
  value: {
    notify_email: true,
    notify_phone: false,
    notify_in_app: true,
    token: "",
    message: "",
    message_email: "",
  } as UpdateNotificationSuccessPayload,
  pending: false,
  errors: [],
};
export interface UpdateNotificationModelShape {
  command: UpdateNotificationCommand;
}
export interface UpdateNotificationFailurePayload {
  errors: string[];
}
export interface UpdateNotificationFailure {
  type: string;
  payload: UpdateNotificationFailurePayload;
}
export interface UpdateNotificationSuccess {
  type: string;
  payload: UpdateNotificationSuccessPayload;
}
export interface UpdateNotificationRequest {
  type: string;
  payload: UpdateNotificationCommand;
}
export interface UpdateNotificationPayload {
  command: UpdateNotificationCommand;
  user: UpdateNotificationSuccessPayload;
  errors: UpdateNotificationFailurePayload;
}
export interface UpdateNotificationAction {
  type: string;
  payload: UpdateNotificationPayload;
}

export interface UpdatePictureStoreShape {
  pending: boolean;
  value: UpdatePictureSuccessPayload;
  errors: string[];
}
export const initialStateUpdatePicture: UpdatePictureStoreShape = {
  value: {
    picture: "",
    token: "",
    message: "",
    message_email: "",
  } as UpdatePictureSuccessPayload,
  pending: false,
  errors: [],
};
export interface UpdatePictureModelShape {
  command: UpdatePictureCommand;
}
export interface UpdatePictureFailurePayload {
  errors: string[];
}
export interface UpdatePictureFailure {
  type: string;
  payload: UpdatePictureFailurePayload;
}
export interface UpdatePictureSuccess {
  type: string;
  payload: UpdatePictureSuccessPayload;
}
export interface UpdatePictureRequest {
  type: string;
  payload: UpdatePictureCommand;
}
export interface UpdatePicturePayload {
  command: UpdatePictureCommand;
  user: UpdatePictureSuccessPayload;
  errors: UpdatePictureFailurePayload;
}
export interface UpdatePictureAction {
  type: string;
  payload: UpdatePicturePayload;
}
