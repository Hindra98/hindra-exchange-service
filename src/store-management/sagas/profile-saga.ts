import { call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../actions/constants/action-types";
import { setStorage } from "@/core/storage/storage";
import { AuthenticationConstants } from "@/core/constants/authentication-contants";
import {
  showToastNotificationError,
  showToastNotificationSuccess,
} from "../actions/server-notifications/server-notifications-action";
import { ControllerApi } from "@/features/common/identity/account/locale/controller-api";
import {
  DeleteProfileAction,
  DeleteProfileFailurePayload,
  ProfilesAction,
  ProfilesFailurePayload,
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
} from "../actions/profile";
import {
  deleteProfileFailure,
  deleteProfileSuccess,
  profilesFailure,
  profilesSuccess,
  profileUserFailure,
  profileUserSuccess,
  updateEmailFailure,
  updateEmailSuccess,
  updateNotificationFailure,
  updateNotificationSuccess,
  updateOtpEmailFailure,
  updateOtpEmailSuccess,
  updateParamsFailure,
  updateParamsSuccess,
  updatePhoneFailure,
  updatePhoneSuccess,
  updatePictureFailure,
  updatePictureSuccess,
  updateProfileFailure,
  updateProfileSuccess,
  updateWebsiteFailure,
  updateWebsiteSuccess,
} from "../actions/profile/profile-actions";
import { errorServerHttpConstant } from "@/core/constants/errors-contants";

const controllerApi = new ControllerApi();

const callApiToProfileUser = async () =>
  controllerApi.profileUser();

const callApiToProfiles = async (command: ProfileUserCommand) =>
  controllerApi.profiles(command);

const callApiToDeleteProfile = async (command: DeleteProfileCommand) =>
  controllerApi.deleteProfile(command);

const callApiToUpdateEmail = async (command: UpdateEmailCommand) =>
  controllerApi.updateEmail(command);

const callApiToUpdateNotification = async (
  command: UpdateNotificationCommand
) => controllerApi.updateNotification(command);

const callApiToUpdateOtpEmail = async (command: UpdateOtpEmailCommand) =>
  controllerApi.updateOtpEmail(command);

const callApiToUpdateParams = async (command: UpdateParamsCommand) =>
  controllerApi.updateParams(command);

const callApiToUpdatePhone = async (command: UpdatePhoneCommand) =>
  controllerApi.updatePhone(command);

const callApiToUpdatePicture = async (command: FormData) =>
  controllerApi.updatePicture(command);

const callApiToUpdateProfile = async (command: UpdateProfileCommand) =>
  controllerApi.updateProfile(command);

const callApiToUpdateWebsite = async (command: UpdateWebsiteCommand) =>
  controllerApi.updateWebsite(command);

function* profileUserSaga() {
  try {
    const response: ProfileUserResult = yield call(
      callApiToProfileUser
    );
    if (response) {
      if (response.hasSucceeded) {
        if(response?.payload?.token) {
          setStorage(
            AuthenticationConstants.ACCESS_TOKEN,
            response.payload.token
          );
        }
        yield put(profileUserSuccess(response.payload));
        // showToastNotificationSuccess([
        //   { type: "Success", value: response.payload.message },
        // ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          profileUserFailure({
            errors: messages,
          } as ProfileUserFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        profileUserFailure({
          errors: messages,
        } as ProfileUserFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      profileUserFailure({
        errors: messages,
      } as ProfileUserFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* profilesSaga(action: ProfilesAction) {
  try {
    const response: ProfilesResult = yield call(
      callApiToProfiles,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        if(response?.payload?.token) {
          setStorage(
            AuthenticationConstants.ACCESS_TOKEN,
            response.payload.token
          );
        }
        yield put(profilesSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          profilesFailure({
            errors: messages,
          } as ProfilesFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        profilesFailure({
          errors: messages,
        } as ProfilesFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      profilesFailure({
        errors: messages,
      } as ProfilesFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* deleteProfileSaga(action: DeleteProfileAction) {
  try {
    const response: DeleteProfileResult = yield call(
      callApiToDeleteProfile,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        if(response?.payload?.token) {
          setStorage(
            AuthenticationConstants.ACCESS_TOKEN,
            response.payload.token
          );
        }
        yield put(deleteProfileSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          deleteProfileFailure({
            errors: messages,
          } as DeleteProfileFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        deleteProfileFailure({
          errors: messages,
        } as DeleteProfileFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      deleteProfileFailure({
        errors: messages,
      } as DeleteProfileFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* updateEmailSaga(action: UpdateEmailAction) {
  try {
    const response: UpdateEmailResult = yield call(
      callApiToUpdateEmail,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        if(response?.payload?.token) {
          setStorage(
            AuthenticationConstants.ACCESS_TOKEN,
            response.payload.token
          );
        }
        yield put(updateEmailSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          updateEmailFailure({
            errors: messages,
          } as UpdateEmailFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        updateEmailFailure({
          errors: messages,
        } as UpdateEmailFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      updateEmailFailure({
        errors: messages,
      } as UpdateEmailFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* updateNotificationSaga(action: UpdateNotificationAction) {
  try {
    const response: UpdateNotificationResult = yield call(
      callApiToUpdateNotification,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        if(response?.payload?.token) {
          setStorage(
            AuthenticationConstants.ACCESS_TOKEN,
            response.payload.token
          );
        }
        yield put(updateNotificationSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          updateNotificationFailure({
            errors: messages,
          } as UpdateNotificationFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        updateNotificationFailure({
          errors: messages,
        } as UpdateNotificationFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      updateNotificationFailure({
        errors: messages,
      } as UpdateNotificationFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* updateOtpEmailSaga(action: UpdateOtpEmailAction) {
  try {
    const response: UpdateOtpEmailResult = yield call(
      callApiToUpdateOtpEmail,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        if(response?.payload?.token) {
          setStorage(
            AuthenticationConstants.ACCESS_TOKEN,
            response.payload.token
          );
        }
        yield put(updateOtpEmailSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          updateOtpEmailFailure({
            errors: messages,
          } as UpdateOtpEmailFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        updateOtpEmailFailure({
          errors: messages,
        } as UpdateOtpEmailFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      updateOtpEmailFailure({
        errors: messages,
      } as UpdateOtpEmailFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* updateParamsSaga(action: UpdateParamsAction) {
  try {
    const response: UpdateParamsResult = yield call(
      callApiToUpdateParams,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        if(response?.payload?.token) {
          setStorage(
            AuthenticationConstants.ACCESS_TOKEN,
            response.payload.token
          );
        }
        yield put(updateParamsSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          updateParamsFailure({
            errors: messages,
          } as UpdateParamsFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        updateParamsFailure({
          errors: messages,
        } as UpdateParamsFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      updateParamsFailure({
        errors: messages,
      } as UpdateParamsFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* updatePhoneSaga(action: UpdatePhoneAction) {
  try {
    const response: UpdatePhoneResult = yield call(
      callApiToUpdatePhone,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        if(response?.payload?.token) {
          setStorage(
            AuthenticationConstants.ACCESS_TOKEN,
            response.payload.token
          );
        }
        yield put(updatePhoneSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          updatePhoneFailure({
            errors: messages,
          } as UpdatePhoneFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        updatePhoneFailure({
          errors: messages,
        } as UpdatePhoneFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      updatePhoneFailure({
        errors: messages,
      } as UpdatePhoneFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* updatePictureSaga(action: UpdatePictureAction) {
  try {
    const response: UpdatePictureResult = yield call(
      callApiToUpdatePicture,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        if(response?.payload?.token) {
          setStorage(
            AuthenticationConstants.ACCESS_TOKEN,
            response.payload.token
          );
        }
        yield put(updatePictureSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          updatePictureFailure({
            errors: messages,
          } as UpdatePictureFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        updatePictureFailure({
          errors: messages,
        } as UpdatePictureFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      updatePictureFailure({
        errors: messages,
      } as UpdatePictureFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* updateProfileSaga(action: UpdateProfileAction) {
  try {
    const response: UpdateProfileResult = yield call(
      callApiToUpdateProfile,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        if(response?.payload?.token) {
          setStorage(
            AuthenticationConstants.ACCESS_TOKEN,
            response.payload.token
          );
        }
        yield put(updateProfileSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          updateProfileFailure({
            errors: messages,
          } as UpdateProfileFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        updateProfileFailure({
          errors: messages,
        } as UpdateProfileFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      updateProfileFailure({
        errors: messages,
      } as UpdateProfileFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* updateWebsiteSaga(action: UpdateWebsiteAction) {
  try {
    const response: UpdateWebsiteResult = yield call(
      callApiToUpdateWebsite,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        if(response?.payload?.token) {
          setStorage(
            AuthenticationConstants.ACCESS_TOKEN,
            response.payload.token
          );
        }
        yield put(updateWebsiteSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          updateWebsiteFailure({
            errors: messages,
          } as UpdateWebsiteFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        updateWebsiteFailure({
          errors: messages,
        } as UpdateWebsiteFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      updateWebsiteFailure({
        errors: messages,
      } as UpdateWebsiteFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

//Watcher: Authenticate user
export function* watchProfileSaga() {
  yield takeLatest(ActionTypes.PROFILE_USER_REQUEST, profileUserSaga);
  yield takeLatest(ActionTypes.PROFILES_REQUEST, profilesSaga);
  yield takeLatest(ActionTypes.DELETE_PROFILE_REQUEST, deleteProfileSaga);
  yield takeLatest(ActionTypes.UPDATE_EMAIL_REQUEST, updateEmailSaga);
  yield takeLatest(
    ActionTypes.UPDATE_NOTIFICATION_REQUEST,
    updateNotificationSaga
  );
  yield takeLatest(ActionTypes.UPDATE_OTP_EMAIL_REQUEST, updateOtpEmailSaga);
  yield takeLatest(ActionTypes.UPDATE_PARAMS_REQUEST, updateParamsSaga);
  yield takeLatest(ActionTypes.UPDATE_PHONE_REQUEST, updatePhoneSaga);
  yield takeLatest(ActionTypes.UPDATE_PICTURE_REQUEST, updatePictureSaga);
  yield takeLatest(ActionTypes.UPDATE_PROFILE_REQUEST, updateProfileSaga);
  yield takeLatest(ActionTypes.UPDATE_WEBSITE_REQUEST, updateWebsiteSaga);
}
