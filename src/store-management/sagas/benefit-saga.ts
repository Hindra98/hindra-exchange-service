import { call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../actions/constants/action-types";
import { setStorage } from "@/core/storage/storage";
import { AuthenticationConstants } from "@/core/constants/authentication-contants";
import {
  showToastNotificationError,
  showToastNotificationSuccess,
} from "../actions/server-notifications/server-notifications-action";
import { errorServerHttpConstant } from "@/core/constants/errors-contants";
import {
  BenefitsFailurePayload,
  BenefitAction,
  BenefitFailurePayload,
  DeleteBenefitAction,
  DeleteBenefitFailurePayload,
  UpdateBenefitAction,
  UpdateBenefitFailurePayload,
} from "../actions/benefit";
import {
  benefitsFailure,
  benefitsSuccess,
  benefitFailure,
  benefitSuccess,
  deleteBenefitFailure,
  deleteBenefitSuccess,
  updateBenefitFailure,
  updateBenefitSuccess,
} from "../actions/benefit/benefit-actions";
import { ControllerApi } from "@/features/management/benefit/locale/controller-api";

const controllerApi = new ControllerApi();

const callApiToBenefit = async (command: BenefitCommand) =>
  controllerApi.benefit(command);

const callApiToBenefits = async () => controllerApi.benefits();

const callApiToDeleteBenefit = async (command: DeleteBenefitCommand) =>
  controllerApi.deleteBenefit(command);

const callApiToUpdateBenefit = async (command: UpdateBenefitCommand) =>
  controllerApi.updateBenefit(command);

function* benefitSaga(action: BenefitAction) {
  try {
    const response: BenefitResult = yield call(
      callApiToBenefit,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        setStorage(
          AuthenticationConstants.ACCESS_TOKEN,
          response.payload.token
        );
        yield put(benefitSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          benefitFailure({
            errors: messages,
          } as BenefitFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        benefitFailure({
          errors: messages,
        } as BenefitFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      benefitFailure({
        errors: messages,
      } as BenefitFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* benefitsSaga() {
  try {
    const response: BenefitsResult = yield call(callApiToBenefits);
    if (response) {
      if (response.hasSucceeded) {
        setStorage(
          AuthenticationConstants.ACCESS_TOKEN,
          response.payload.token
        );
        yield put(benefitsSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          benefitsFailure({
            errors: messages,
          } as BenefitsFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        benefitsFailure({
          errors: messages,
        } as BenefitsFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      benefitsFailure({
        errors: messages,
      } as BenefitsFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* deleteBenefitSaga(action: DeleteBenefitAction) {
  try {
    const response: DeleteBenefitResult = yield call(
      callApiToDeleteBenefit,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        setStorage(
          AuthenticationConstants.ACCESS_TOKEN,
          response.payload.token
        );
        yield put(deleteBenefitSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          deleteBenefitFailure({
            errors: messages,
          } as DeleteBenefitFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        deleteBenefitFailure({
          errors: messages,
        } as DeleteBenefitFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      deleteBenefitFailure({
        errors: messages,
      } as DeleteBenefitFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* updateBenefitSaga(action: UpdateBenefitAction) {
  try {
    const response: UpdateBenefitResult = yield call(
      callApiToUpdateBenefit,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        setStorage(
          AuthenticationConstants.ACCESS_TOKEN,
          response.payload.token
        );
        yield put(updateBenefitSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          updateBenefitFailure({
            errors: messages,
          } as UpdateBenefitFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        updateBenefitFailure({
          errors: messages,
        } as UpdateBenefitFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      updateBenefitFailure({
        errors: messages,
      } as UpdateBenefitFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

//Watcher: Benefits
export function* watchBenefitSaga() {
  yield takeLatest(ActionTypes.BENEFIT_REQUEST, benefitSaga);
  yield takeLatest(ActionTypes.BENEFITS_REQUEST, benefitsSaga);
  yield takeLatest(ActionTypes.DELETE_BENEFIT_REQUEST, deleteBenefitSaga);
  yield takeLatest(ActionTypes.UPDATE_BENEFIT_REQUEST, updateBenefitSaga);
}
