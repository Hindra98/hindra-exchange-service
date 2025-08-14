import {
  DeleteProfileAction,
  DeleteProfileFailurePayload,
  ProfilesAction,
  ProfilesFailurePayload,
  ProfileUserAction,
  ProfileUserFailurePayload,
  UpdateEmailAction,
  UpdateEmailFailurePayload,
  UpdateNotificationAction,
  UpdateNotificationFailurePayload,
  UpdateOtpEmailAction,
  UpdateOtpEmailFailurePayload,
  UpdateParamsAction,
  UpdateParamsFailurePayload,
  UpdatePhoneAction,
  UpdatePhoneFailurePayload,
  UpdatePictureAction,
  UpdatePictureFailurePayload,
  UpdateProfileAction,
  UpdateProfileFailurePayload,
  UpdateWebsiteAction,
  UpdateWebsiteFailurePayload,
} from ".";
import { ActionTypes } from "../constants/action-types";

export const profileUser = (): ProfileUserAction => {
  return {
    type: ActionTypes.PROFILE_USER_REQUEST,
    payload: {
      command: null,
      user: {},
      errors: {},
    },
  } as ProfileUserAction;
};
export const profileUserSuccess = (
  payload: ProfileUserSuccessPayload
): ProfileUserAction => {
  return {
    type: ActionTypes.PROFILE_USER_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as ProfileUserAction;
};
export const profileUserFailure = (
  payload: ProfileUserFailurePayload
): ProfileUserAction => {
  return {
    type: ActionTypes.PROFILE_USER_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as ProfileUserAction;
};

export const profiles = (): ProfilesAction => {
  return {
    type: ActionTypes.PROFILES_REQUEST,
    payload: {
      command: null,
      user: {},
      errors: {},
    },
  } as ProfilesAction;
};
export const profilesSuccess = (
  payload: ProfilesSuccessPayload
): ProfilesAction => {
  return {
    type: ActionTypes.PROFILES_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as ProfilesAction;
};
export const profilesFailure = (
  payload: ProfilesFailurePayload
): ProfilesAction => {
  return {
    type: ActionTypes.PROFILES_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as ProfilesAction;
};

export const deleteProfile = (payload: DeleteProfileCommand): DeleteProfileAction => {
  return {
    type: ActionTypes.DELETE_PROFILE_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as DeleteProfileAction;
};
export const deleteProfileSuccess = (
  payload: DeleteProfileSuccessPayload
): DeleteProfileAction => {
  return {
    type: ActionTypes.DELETE_PROFILE_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as DeleteProfileAction;
};
export const deleteProfileFailure = (
  payload: DeleteProfileFailurePayload
): DeleteProfileAction => {
  return {
    type: ActionTypes.DELETE_PROFILE_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as DeleteProfileAction;
};

export const updateProfile = (
  payload: UpdateProfileCommand
): UpdateProfileAction => {
  return {
    type: ActionTypes.UPDATE_PROFILE_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as UpdateProfileAction;
};
export const updateProfileSuccess = (
  payload: UpdateProfileSuccessPayload
): UpdateProfileAction => {
  return {
    type: ActionTypes.UPDATE_PROFILE_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as UpdateProfileAction;
};
export const updateProfileFailure = (
  payload: UpdateProfileFailurePayload
): UpdateProfileAction => {
  return {
    type: ActionTypes.UPDATE_PROFILE_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as UpdateProfileAction;
};

export const updateParams = (
  payload: UpdateParamsCommand
): UpdateParamsAction => {
  return {
    type: ActionTypes.UPDATE_PARAMS_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as UpdateParamsAction;
};
export const updateParamsSuccess = (
  payload: UpdateParamsSuccessPayload
): UpdateParamsAction => {
  return {
    type: ActionTypes.UPDATE_PARAMS_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as UpdateParamsAction;
};
export const updateParamsFailure = (
  payload: UpdateParamsFailurePayload
): UpdateParamsAction => {
  return {
    type: ActionTypes.UPDATE_PARAMS_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as UpdateParamsAction;
};

export const updatePicture = (
  payload: FormData
): UpdatePictureAction => {
  return {
    type: ActionTypes.UPDATE_PICTURE_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as UpdatePictureAction;
};
export const updatePictureSuccess = (
  payload: UpdatePictureSuccessPayload
): UpdatePictureAction => {
  return {
    type: ActionTypes.UPDATE_PICTURE_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as UpdatePictureAction;
};
export const updatePictureFailure = (
  payload: UpdatePictureFailurePayload
): UpdatePictureAction => {
  return {
    type: ActionTypes.UPDATE_PICTURE_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as UpdatePictureAction;
};

export const updateEmail = (payload: UpdateEmailCommand): UpdateEmailAction => {
  return {
    type: ActionTypes.UPDATE_EMAIL_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as UpdateEmailAction;
};
export const updateEmailSuccess = (
  payload: UpdateEmailSuccessPayload
): UpdateEmailAction => {
  return {
    type: ActionTypes.UPDATE_EMAIL_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as UpdateEmailAction;
};
export const updateEmailFailure = (
  payload: UpdateEmailFailurePayload
): UpdateEmailAction => {
  return {
    type: ActionTypes.UPDATE_EMAIL_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as UpdateEmailAction;
};

export const updateOtpEmail = (
  payload: UpdateOtpEmailCommand
): UpdateOtpEmailAction => {
  return {
    type: ActionTypes.UPDATE_OTP_EMAIL_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as UpdateOtpEmailAction;
};
export const updateOtpEmailSuccess = (
  payload: UpdateOtpEmailSuccessPayload
): UpdateOtpEmailAction => {
  return {
    type: ActionTypes.UPDATE_OTP_EMAIL_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as UpdateOtpEmailAction;
};
export const updateOtpEmailFailure = (
  payload: UpdateOtpEmailFailurePayload
): UpdateOtpEmailAction => {
  return {
    type: ActionTypes.UPDATE_OTP_EMAIL_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as UpdateOtpEmailAction;
};

export const updatePhone = (payload: UpdatePhoneCommand): UpdatePhoneAction => {
  return {
    type: ActionTypes.UPDATE_PHONE_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as UpdatePhoneAction;
};
export const updatePhoneSuccess = (
  payload: UpdatePhoneSuccessPayload
): UpdatePhoneAction => {
  return {
    type: ActionTypes.UPDATE_PHONE_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as UpdatePhoneAction;
};
export const updatePhoneFailure = (
  payload: UpdatePhoneFailurePayload
): UpdatePhoneAction => {
  return {
    type: ActionTypes.UPDATE_PHONE_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as UpdatePhoneAction;
};

export const updateWebsite = (
  payload: UpdateWebsiteCommand
): UpdateWebsiteAction => {
  return {
    type: ActionTypes.UPDATE_WEBSITE_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as UpdateWebsiteAction;
};
export const updateWebsiteSuccess = (
  payload: UpdateWebsiteSuccessPayload
): UpdateWebsiteAction => {
  return {
    type: ActionTypes.UPDATE_WEBSITE_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as UpdateWebsiteAction;
};
export const updateWebsiteFailure = (
  payload: UpdateWebsiteFailurePayload
): UpdateWebsiteAction => {
  return {
    type: ActionTypes.UPDATE_WEBSITE_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as UpdateWebsiteAction;
};

export const updateNotification = (
  payload: UpdateNotificationCommand
): UpdateNotificationAction => {
  return {
    type: ActionTypes.UPDATE_NOTIFICATION_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as UpdateNotificationAction;
};
export const updateNotificationSuccess = (
  payload: UpdateNotificationSuccessPayload
): UpdateNotificationAction => {
  return {
    type: ActionTypes.UPDATE_NOTIFICATION_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as UpdateNotificationAction;
};
export const updateNotificationFailure = (
  payload: UpdateNotificationFailurePayload
): UpdateNotificationAction => {
  return {
    type: ActionTypes.UPDATE_NOTIFICATION_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as UpdateNotificationAction;
};
