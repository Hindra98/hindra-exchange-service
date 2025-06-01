import { CategoryStoreShape, CategoryAction, initialStateCategory, initialStateCategories, CategoriesStoreShape, CategoriesAction, DeleteCategoryStoreShape, DeleteCategoryAction, initialStateDeleteCategory, initialStateUpdateCategory, UpdateCategoryStoreShape, UpdateCategoryAction } from './../actions/category/index';
import { produce } from "immer";
import { ActionTypes } from "../actions/constants/action-types";

export const categoryReducer = (
  state: CategoryStoreShape = initialStateCategory,
  args: CategoryAction
): CategoryStoreShape => {
  switch (args.type) {
    case ActionTypes.CATEGORY_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.CATEGORY_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.id = args.payload?.user?.id;
        draftState.value.title = args.payload?.user?.title;
        draftState.value.picture = args.payload?.user?.picture;
        draftState.value.description = args.payload?.user?.description;
        draftState.value.created_at = args.payload?.user?.created_at;
        draftState.value.updated_at = args.payload?.user?.updated_at;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.CATEGORY_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const categoriesReducer = (
  state: CategoriesStoreShape = initialStateCategories,
  args: CategoriesAction
): CategoriesStoreShape => {
  switch (args.type) {
    case ActionTypes.CATEGORIES_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.CATEGORIES_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.categories = args.payload?.user?.categories;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.CATEGORIES_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const deleteCategoryReducer = (
  state: DeleteCategoryStoreShape = initialStateDeleteCategory,
  args: DeleteCategoryAction
): DeleteCategoryStoreShape => {
  switch (args.type) {
    case ActionTypes.DELETE_CATEGORY_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.DELETE_CATEGORY_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.categories = args.payload?.user?.categories;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.DELETE_CATEGORY_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const updateCategoryReducer = (
  state: UpdateCategoryStoreShape = initialStateUpdateCategory,
  args: UpdateCategoryAction
): UpdateCategoryStoreShape => {
  switch (args.type) {
    case ActionTypes.UPDATE_CATEGORY_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.UPDATE_CATEGORY_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.id = args.payload?.user?.id;
        draftState.value.title = args.payload?.user?.title;
        draftState.value.picture = args.payload?.user?.picture;
        draftState.value.description = args.payload?.user?.description;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.UPDATE_CATEGORY_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};
