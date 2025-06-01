import { produce } from "immer";
import { ActionTypes } from "../actions/constants/action-types";
import {
  DeleteProfileAction,
  DeleteProfileStoreShape,
  initialStateDeleteProfile,
  initialStateProfiles,
  initialStateProfileUser,
  initialStateUpdateEmail,
  initialStateUpdateNotification,
  initialStateUpdateOtpEmail,
  initialStateUpdateParams,
  initialStateUpdatePhone,
  initialStateUpdatePicture,
  initialStateUpdateProfile,
  initialStateUpdateWebsite,
  ProfilesAction,
  ProfilesStoreShape,
  ProfileUserAction,
  ProfileUserStoreShape,
  UpdateEmailAction,
  UpdateEmailStoreShape,
  UpdateNotificationAction,
  UpdateNotificationStoreShape,
  UpdateOtpEmailAction,
  UpdateOtpEmailStoreShape,
  UpdateParamsAction,
  UpdateParamsStoreShape,
  UpdatePhoneAction,
  UpdatePhoneStoreShape,
  UpdatePictureAction,
  UpdatePictureStoreShape,
  UpdateProfileAction,
  UpdateProfileStoreShape,
  UpdateWebsiteAction,
  UpdateWebsiteStoreShape,
} from "../actions/profile";

export const profileUserReducer = (
  state: ProfileUserStoreShape = initialStateProfileUser,
  args: ProfileUserAction
): ProfileUserStoreShape => {
  switch (args.type) {
    case ActionTypes.PROFILE_USER_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.PROFILE_USER_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.id = args.payload?.user?.id;
        draftState.value.lastname = args.payload?.user?.lastname;
        draftState.value.firstname = args.payload?.user?.firstname;
        draftState.value.gender = args.payload?.user?.gender;
        draftState.value.email = args.payload?.user?.email;
        draftState.value.phone = args.payload?.user?.phone;
        draftState.value.picture = args.payload?.user?.picture;
        draftState.value.userlanguage = args.payload?.user?.userlanguage;
        draftState.value.theme = args.payload?.user?.theme;
        draftState.value.role = args.payload?.user?.role;
        draftState.value.website = args.payload?.user?.website;
        draftState.value.github = args.payload?.user?.github;
        draftState.value.linkedin = args.payload?.user?.linkedin;
        draftState.value.notify_email = args.payload?.user?.notify_email;
        draftState.value.notify_phone = args.payload?.user?.notify_phone;
        draftState.value.notify_in_app = args.payload?.user?.notify_in_app;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.PROFILE_USER_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const profilesReducer = (
  state: ProfilesStoreShape = initialStateProfiles,
  args: ProfilesAction
): ProfilesStoreShape => {
  switch (args.type) {
    case ActionTypes.PROFILES_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.PROFILES_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.profiles = args.payload?.user?.profiles;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.PROFILES_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const deleteProfileReducer = (
  state: DeleteProfileStoreShape = initialStateDeleteProfile,
  args: DeleteProfileAction
): DeleteProfileStoreShape => {
  switch (args.type) {
    case ActionTypes.DELETE_PROFILE_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.DELETE_PROFILE_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.profiles = args.payload?.user?.profiles;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.DELETE_PROFILE_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const updateProfileReducer = (
  state: UpdateProfileStoreShape = initialStateUpdateProfile,
  args: UpdateProfileAction
): UpdateProfileStoreShape => {
  switch (args.type) {
    case ActionTypes.UPDATE_PROFILE_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.UPDATE_PROFILE_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.id = args.payload?.user?.id;
        draftState.value.lastname = args.payload?.user?.lastname;
        draftState.value.firstname = args.payload?.user?.firstname;
        draftState.value.gender = args.payload?.user?.gender;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.UPDATE_PROFILE_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const updateParamsReducer = (
  state: UpdateParamsStoreShape = initialStateUpdateParams,
  args: UpdateParamsAction
): UpdateParamsStoreShape => {
  switch (args.type) {
    case ActionTypes.UPDATE_PARAMS_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.UPDATE_PARAMS_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.theme = args.payload?.user?.theme;
        draftState.value.userlanguage = args.payload?.user?.userlanguage;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.UPDATE_PARAMS_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const updatePictureReducer = (
  state: UpdatePictureStoreShape = initialStateUpdatePicture,
  args: UpdatePictureAction
): UpdatePictureStoreShape => {
  switch (args.type) {
    case ActionTypes.UPDATE_PICTURE_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.UPDATE_PICTURE_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.picture = args.payload?.user?.picture;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.UPDATE_PICTURE_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const updateEmailReducer = (
  state: UpdateEmailStoreShape = initialStateUpdateEmail,
  args: UpdateEmailAction
): UpdateEmailStoreShape => {
  switch (args.type) {
    case ActionTypes.UPDATE_EMAIL_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.UPDATE_EMAIL_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.email = args.payload?.user?.email;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.UPDATE_EMAIL_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const updateOtpEmailReducer = (
  state: UpdateOtpEmailStoreShape = initialStateUpdateOtpEmail,
  args: UpdateOtpEmailAction
): UpdateOtpEmailStoreShape => {
  switch (args.type) {
    case ActionTypes.UPDATE_OTP_EMAIL_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.UPDATE_OTP_EMAIL_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.email = args.payload?.user?.email;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.UPDATE_OTP_EMAIL_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const updatePhoneReducer = (
  state: UpdatePhoneStoreShape = initialStateUpdatePhone,
  args: UpdatePhoneAction
): UpdatePhoneStoreShape => {
  switch (args.type) {
    case ActionTypes.UPDATE_PHONE_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.UPDATE_PHONE_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.phone = args.payload?.user?.phone;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.UPDATE_PHONE_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const updateWebsiteReducer = (
  state: UpdateWebsiteStoreShape = initialStateUpdateWebsite,
  args: UpdateWebsiteAction
): UpdateWebsiteStoreShape => {
  switch (args.type) {
    case ActionTypes.UPDATE_WEBSITE_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.UPDATE_WEBSITE_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.linkedin = args.payload?.user?.linkedin;
        draftState.value.website = args.payload?.user?.website;
        draftState.value.github = args.payload?.user?.github;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.UPDATE_WEBSITE_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const updateNotificationReducer = (
  state: UpdateNotificationStoreShape = initialStateUpdateNotification,
  args: UpdateNotificationAction
): UpdateNotificationStoreShape => {
  switch (args.type) {
    case ActionTypes.UPDATE_NOTIFICATION_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.UPDATE_NOTIFICATION_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.notify_in_app = args.payload?.user?.notify_in_app;
        draftState.value.notify_email = args.payload?.user?.notify_email;
        draftState.value.notify_phone = args.payload?.user?.notify_phone;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.UPDATE_NOTIFICATION_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};
