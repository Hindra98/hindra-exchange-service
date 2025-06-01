
import { CategoriesAction, CategoriesFailurePayload, CategoryAction, CategoryFailurePayload, DeleteCategoryAction, DeleteCategoryFailurePayload, UpdateCategoryAction, UpdateCategoryFailurePayload } from ".";
import { ActionTypes } from "../constants/action-types";

export const category = (payload: CategoryCommand): CategoryAction => {
  return {
    type: ActionTypes.CATEGORY_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as CategoryAction;
};
export const categorySuccess = (
  payload: CategorySuccessPayload
): CategoryAction => {
  return {
    type: ActionTypes.CATEGORY_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as CategoryAction;
};
export const categoryFailure = (
  payload: CategoryFailurePayload
): CategoryAction => {
  return {
    type: ActionTypes.CATEGORY_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as CategoryAction;
};

export const categories = (): CategoriesAction => {
  return {
    type: ActionTypes.CATEGORIES_REQUEST,
    payload: {
      command: null,
      user: {},
      errors: {},
    },
  } as CategoriesAction;
};
export const categoriesSuccess = (
  payload: CategoriesSuccessPayload
): CategoriesAction => {
  return {
    type: ActionTypes.CATEGORIES_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as CategoriesAction;
};
export const categoriesFailure = (
  payload: CategoriesFailurePayload
): CategoriesAction => {
  return {
    type: ActionTypes.CATEGORIES_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as CategoriesAction;
};

export const deleteCategory = (payload: DeleteCategoryCommand): DeleteCategoryAction => {
  return {
    type: ActionTypes.DELETE_CATEGORY_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as DeleteCategoryAction;
};
export const deleteCategorySuccess = (
  payload: DeleteCategorySuccessPayload
): DeleteCategoryAction => {
  return {
    type: ActionTypes.DELETE_CATEGORY_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as DeleteCategoryAction;
};
export const deleteCategoryFailure = (
  payload: DeleteCategoryFailurePayload
): DeleteCategoryAction => {
  return {
    type: ActionTypes.DELETE_CATEGORY_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as DeleteCategoryAction;
};

export const updateCategory = (
  payload: UpdateCategoryCommand
): UpdateCategoryAction => {
  return {
    type: ActionTypes.UPDATE_CATEGORY_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as UpdateCategoryAction;
};
export const updateCategorySuccess = (
  payload: UpdateCategorySuccessPayload
): UpdateCategoryAction => {
  return {
    type: ActionTypes.UPDATE_CATEGORY_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as UpdateCategoryAction;
};
export const updateCategoryFailure = (
  payload: UpdateCategoryFailurePayload
): UpdateCategoryAction => {
  return {
    type: ActionTypes.UPDATE_CATEGORY_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as UpdateCategoryAction;
};
