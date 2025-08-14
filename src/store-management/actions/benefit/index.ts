export interface BenefitStoreShape {
  pending: boolean;
  value: BenefitSuccessPayload;
  errors: string[];
}
export const initialStateBenefit: BenefitStoreShape = {
  value: {
    id: "",
    user_id: "",
    title: "",
    description: "",
    category: "",
    price: "",
    location: "",
    avaibility: "",
    pictures: [],
    created_at: "",
    updated_at: "",
    token: "",
    message: "",
    message_email: "",
  } as BenefitSuccessPayload,
  pending: false,
  errors: [],
};
export interface BenefitModelShape {
  command: BenefitCommand;
}
export interface BenefitFailurePayload {
  errors: string[];
}
export interface BenefitFailure {
  type: string;
  payload: BenefitFailurePayload;
}
export interface BenefitSuccess {
  type: string;
  payload: BenefitSuccessPayload;
}
export interface BenefitRequest {
  type: string;
  payload: BenefitCommand;
}
export interface BenefitPayload {
  command: BenefitCommand;
  user: BenefitSuccessPayload;
  errors: BenefitFailurePayload;
}
export interface BenefitAction {
  type: string;
  payload: BenefitPayload;
}

export interface BenefitsStoreShape {
  pending: boolean;
  value: BenefitsSuccessPayload;
  errors: string[];
}
export const initialStateBenefits: BenefitsStoreShape = {
  value: {
    benefits: [],
    token: "",
    message: "",
    message_email: "",
  } as BenefitsSuccessPayload,
  pending: false,
  errors: [],
};
export interface BenefitsModelShape {
  command: null;
}
export interface BenefitsFailurePayload {
  errors: string[];
}
export interface BenefitsFailure {
  type: string;
  payload: BenefitsFailurePayload;
}
export interface BenefitsSuccess {
  type: string;
  payload: BenefitsSuccessPayload;
}
export interface BenefitsRequest {
  type: string;
  payload: null;
}
export interface BenefitsPayload {
  command: null;
  user: BenefitsSuccessPayload;
  errors: BenefitsFailurePayload;
}
export interface BenefitsAction {
  type: string;
  payload: BenefitsPayload;
}

export interface DeleteBenefitStoreShape {
  pending: boolean;
  value: DeleteBenefitSuccessPayload;
  errors: string[];
}
export const initialStateDeleteBenefit: DeleteBenefitStoreShape = {
  value: {
    benefits: [],
    token: "",
    message: "",
    message_email: "",
  } as DeleteBenefitSuccessPayload,
  pending: false,
  errors: [],
};
export interface DeleteBenefitModelShape {
  command: DeleteBenefitCommand;
}
export interface DeleteBenefitFailurePayload {
  errors: string[];
}
export interface DeleteBenefitFailure {
  type: string;
  payload: DeleteBenefitFailurePayload;
}
export interface DeleteBenefitSuccess {
  type: string;
  payload: DeleteBenefitSuccessPayload;
}
export interface DeleteBenefitRequest {
  type: string;
  payload: DeleteBenefitCommand;
}
export interface DeleteBenefitPayload {
  command: DeleteBenefitCommand;
  user: DeleteBenefitSuccessPayload;
  errors: DeleteBenefitFailurePayload;
}
export interface DeleteBenefitAction {
  type: string;
  payload: DeleteBenefitPayload;
}

export interface UpdateBenefitStoreShape {
  pending: boolean;
  value: UpdateBenefitSuccessPayload;
  errors: string[];
}
export const initialStateUpdateBenefit: UpdateBenefitStoreShape = {
  value: {
    id: "",
    user_id: "",
    title: "",
    description: "",
    category: "",
    price: "",
    location: "",
    avaibility: "",
    pictures: [],
    token: "",
    message: "",
    message_email: "",
  } as UpdateBenefitSuccessPayload,
  pending: false,
  errors: [],
};
export interface UpdateBenefitModelShape {
  command: UpdateBenefitCommand;
}
export interface UpdateBenefitFailurePayload {
  errors: string[];
}
export interface UpdateBenefitFailure {
  type: string;
  payload: UpdateBenefitFailurePayload;
}
export interface UpdateBenefitSuccess {
  type: string;
  payload: UpdateBenefitSuccessPayload;
}
export interface UpdateBenefitRequest {
  type: string;
  payload: UpdateBenefitCommand;
}
export interface UpdateBenefitPayload {
  command: UpdateBenefitCommand;
  user: UpdateBenefitSuccessPayload;
  errors: UpdateBenefitFailurePayload;
}
export interface UpdateBenefitAction {
  type: string;
  payload: UpdateBenefitPayload;
}
