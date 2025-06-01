import { call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../actions/constants/action-types";
import { setStorage } from "@/core/storage/storage";
import { AuthenticationConstants } from "@/core/constants/authentication-contants";
import {
  showToastNotificationError,
  showToastNotificationSuccess,
} from "../actions/server-notifications/server-notifications-action";
import { errorServerHttpConstant } from "@/core/constants/errors-contants";
import { ControllerApi } from "@/features/management/category/locale/controller-api";
import { CategoriesAction, CategoriesFailurePayload, CategoryAction, CategoryFailurePayload, DeleteCategoryAction, DeleteCategoryFailurePayload, UpdateCategoryAction, UpdateCategoryFailurePayload } from "../actions/category";
import { categoriesFailure, categoriesSuccess, categoryFailure, categorySuccess, deleteCategoryFailure, deleteCategorySuccess, updateCategoryFailure, updateCategorySuccess } from "../actions/category/category-actions";

const controllerApi = new ControllerApi();

const callApiToCategory = async (command: CategoryCommand) =>
  controllerApi.category(command);

const callApiToCategories = async (command: CategoryCommand) =>
  controllerApi.categories(command);

const callApiToDeleteCategory = async (command: DeleteCategoryCommand) =>
  controllerApi.deleteCategory(command);

const callApiToUpdateCategory = async (command: UpdateCategoryCommand) =>
  controllerApi.updateCategory(command);


function* categorySaga(action: CategoryAction) {
  try {
    const response: CategoryResult = yield call(
      callApiToCategory,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        setStorage(
          AuthenticationConstants.ACCESS_TOKEN,
          response.payload.token
        );
        yield put(categorySuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          categoryFailure({
            errors: messages,
          } as CategoryFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        categoryFailure({
          errors: messages,
        } as CategoryFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      categoryFailure({
        errors: messages,
      } as CategoryFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* categoriesSaga(action: CategoriesAction) {
  try {
    const response: CategoriesResult = yield call(
      callApiToCategories,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        setStorage(
          AuthenticationConstants.ACCESS_TOKEN,
          response.payload.token
        );
        yield put(categoriesSuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          categoriesFailure({
            errors: messages,
          } as CategoriesFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        categoriesFailure({
          errors: messages,
        } as CategoriesFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      categoriesFailure({
        errors: messages,
      } as CategoriesFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* deleteCategorySaga(action: DeleteCategoryAction) {
  try {
    const response: DeleteCategoryResult = yield call(
      callApiToDeleteCategory,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        setStorage(
          AuthenticationConstants.ACCESS_TOKEN,
          response.payload.token
        );
        yield put(deleteCategorySuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          deleteCategoryFailure({
            errors: messages,
          } as DeleteCategoryFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        deleteCategoryFailure({
          errors: messages,
        } as DeleteCategoryFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      deleteCategoryFailure({
        errors: messages,
      } as DeleteCategoryFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

function* updateCategorySaga(action: UpdateCategoryAction) {
  try {
    const response: UpdateCategoryResult = yield call(
      callApiToUpdateCategory,
      action.payload.command
    );
    if (response) {
      if (response.hasSucceeded) {
        setStorage(
          AuthenticationConstants.ACCESS_TOKEN,
          response.payload.token
        );
        yield put(updateCategorySuccess(response.payload));
        showToastNotificationSuccess([
          { type: "Success", value: response.payload.message },
        ]);
      } else {
        const messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(
          updateCategoryFailure({
            errors: messages,
          } as UpdateCategoryFailurePayload)
        );
        showToastNotificationError([{ type: "Error", value: messages[0] }]);
      }
    } else {
      const messages: string[] = [];
      messages.push(errorServerHttpConstant);
      yield put(
        updateCategoryFailure({
          errors: messages,
        } as UpdateCategoryFailurePayload)
      );
      showToastNotificationError([{ type: "Error", value: messages[0] }]);
    }
  } catch (e) {
    const messages: string[] = [];
    messages.push(e.message);
    yield put(
      updateCategoryFailure({
        errors: messages,
      } as UpdateCategoryFailurePayload)
    );
    showToastNotificationError([{ type: "Error", value: messages[0] }]);
  }
}

//Watcher: Authenticate user
export function* watchCategorySaga() {
  yield takeLatest(ActionTypes.CATEGORY_REQUEST, categorySaga);
  yield takeLatest(ActionTypes.CATEGORIES_REQUEST, categoriesSaga);
  yield takeLatest(ActionTypes.DELETE_CATEGORY_REQUEST, deleteCategorySaga);
  yield takeLatest(ActionTypes.UPDATE_CATEGORY_REQUEST, updateCategorySaga);
}
