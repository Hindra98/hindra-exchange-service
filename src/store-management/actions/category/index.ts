export interface CategoryStoreShape {
  pending: boolean;
  value: CategorySuccessPayload;
  errors: string[];
}
export const initialStateCategory: CategoryStoreShape = {
  value: {
    id: "",
    title: "",
    picture: "",
    description: "",
    created_at: "",
    updated_at: "",
    token: "",
    message: "",
    message_email: "",
  } as CategorySuccessPayload,
  pending: false,
  errors: [],
};
export interface CategoryModelShape {
  command: CategoryCommand;
}
export interface CategoryFailurePayload {
  errors: string[];
}
export interface CategoryFailure {
  type: string;
  payload: CategoryFailurePayload;
}
export interface CategorySuccess {
  type: string;
  payload: CategorySuccessPayload;
}
export interface CategoryRequest {
  type: string;
  payload: CategoryCommand;
}
export interface CategoryPayload {
  command: CategoryCommand;
  user: CategorySuccessPayload;
  errors: CategoryFailurePayload;
}
export interface CategoryAction {
  type: string;
  payload: CategoryPayload;
}

export interface CategoriesStoreShape {
  pending: boolean;
  value: CategoriesSuccessPayload;
  errors: string[];
}
export const initialStateCategories: CategoriesStoreShape = {
  value: {
    categories: [],
    token: "",
    message: "",
    message_email: "",
  } as CategoriesSuccessPayload,
  pending: false,
  errors: [],
};
export interface CategoriesModelShape {
  command: null;
}
export interface CategoriesFailurePayload {
  errors: string[];
}
export interface CategoriesFailure {
  type: string;
  payload: CategoriesFailurePayload;
}
export interface CategoriesSuccess {
  type: string;
  payload: CategoriesSuccessPayload;
}
export interface CategoriesRequest {
  type: string;
  payload: null;
}
export interface CategoriesPayload {
  command: null;
  user: CategoriesSuccessPayload;
  errors: CategoriesFailurePayload;
}
export interface CategoriesAction {
  type: string;
  payload: CategoriesPayload;
}

export interface DeleteCategoryStoreShape {
  pending: boolean;
  value: DeleteCategorySuccessPayload;
  errors: string[];
}
export const initialStateDeleteCategory: DeleteCategoryStoreShape = {
  value: {
    categories: [],
    token: "",
    message: "",
    message_email: "",
  } as DeleteCategorySuccessPayload,
  pending: false,
  errors: [],
};
export interface DeleteCategoryModelShape {
  command: DeleteCategoryCommand;
}
export interface DeleteCategoryFailurePayload {
  errors: string[];
}
export interface DeleteCategoryFailure {
  type: string;
  payload: DeleteCategoryFailurePayload;
}
export interface DeleteCategorySuccess {
  type: string;
  payload: DeleteCategorySuccessPayload;
}
export interface DeleteCategoryRequest {
  type: string;
  payload: DeleteCategoryCommand;
}
export interface DeleteCategoryPayload {
  command: DeleteCategoryCommand;
  user: DeleteCategorySuccessPayload;
  errors: DeleteCategoryFailurePayload;
}
export interface DeleteCategoryAction {
  type: string;
  payload: DeleteCategoryPayload;
}

export interface UpdateCategoryStoreShape {
  pending: boolean;
  value: UpdateCategorySuccessPayload;
  errors: string[];
}
export const initialStateUpdateCategory: UpdateCategoryStoreShape = {
  value: {
    id: "",
    title: "",
    picture: null,
    description: "",
    token: "",
    message: "",
    message_email: "",
  } as UpdateCategorySuccessPayload,
  pending: false,
  errors: [],
};
export interface UpdateCategoryModelShape {
  command: UpdateCategoryCommand;
}
export interface UpdateCategoryFailurePayload {
  errors: string[];
}
export interface UpdateCategoryFailure {
  type: string;
  payload: UpdateCategoryFailurePayload;
}
export interface UpdateCategorySuccess {
  type: string;
  payload: UpdateCategorySuccessPayload;
}
export interface UpdateCategoryRequest {
  type: string;
  payload: FormData;
}
export interface UpdateCategoryPayload {
  command: FormData;
  user: UpdateCategorySuccessPayload;
  errors: UpdateCategoryFailurePayload;
}
export interface UpdateCategoryAction {
  type: string;
  payload: UpdateCategoryPayload;
}

export interface AddCategoryStoreShape {
  pending: boolean;
  value: AddCategorySuccessPayload;
  errors: string[];
}
export const initialStateAddCategory: AddCategoryStoreShape = {
  value: {
    id: "",
    title: "",
    picture: null,
    description: "",
    token: "",
    message: "",
    message_email: "",
  } as AddCategorySuccessPayload,
  pending: false,
  errors: [],
};
export interface AddCategoryModelShape {
  command: UpdateCategoryCommand;
}
export interface AddCategoryFailurePayload {
  errors: string[];
}
export interface AddCategoryFailure {
  type: string;
  payload: AddCategoryFailurePayload;
}
export interface AddCategorySuccess {
  type: string;
  payload: AddCategorySuccessPayload;
}
export interface AddCategoryRequest {
  type: string;
  payload: FormData;
}
export interface AddCategoryPayload {
  command: FormData;
  user: AddCategorySuccessPayload;
  errors: AddCategoryFailurePayload;
}
export interface AddCategoryAction {
  type: string;
  payload: AddCategoryPayload;
}
