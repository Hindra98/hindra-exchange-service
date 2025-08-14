import { BenefitStoreShape, BenefitAction, initialStateBenefit, initialStateBenefits, BenefitsStoreShape, BenefitsAction, DeleteBenefitStoreShape, DeleteBenefitAction, initialStateDeleteBenefit, initialStateUpdateBenefit, UpdateBenefitStoreShape, UpdateBenefitAction } from './../actions/benefit/index';
import { produce } from "immer";
import { ActionTypes } from "../actions/constants/action-types";

export const benefitReducer = (
  state: BenefitStoreShape = initialStateBenefit,
  args: BenefitAction
): BenefitStoreShape => {
  switch (args.type) {
    case ActionTypes.BENEFIT_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.BENEFIT_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.id = args.payload?.user?.id;
        draftState.value.user_id = args.payload?.user?.user_id;
        draftState.value.title = args.payload?.user?.title;
        draftState.value.description = args.payload?.user?.description;
        draftState.value.category = args.payload?.user?.category;
        draftState.value.price = args.payload?.user?.price;
        draftState.value.location = args.payload?.user?.location;
        draftState.value.avaibility = args.payload?.user?.avaibility;
        draftState.value.pictures = args.payload?.user?.pictures;
        draftState.value.created_at = args.payload?.user?.created_at;
        draftState.value.updated_at = args.payload?.user?.updated_at;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.BENEFIT_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const benefitsReducer = (
  state: BenefitsStoreShape = initialStateBenefits,
  args: BenefitsAction
): BenefitsStoreShape => {
  switch (args.type) {
    case ActionTypes.BENEFITS_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.BENEFITS_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.benefits = args.payload?.user?.benefits;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.BENEFITS_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const deleteBenefitReducer = (
  state: DeleteBenefitStoreShape = initialStateDeleteBenefit,
  args: DeleteBenefitAction
): DeleteBenefitStoreShape => {
  switch (args.type) {
    case ActionTypes.DELETE_BENEFIT_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.DELETE_BENEFIT_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.benefits = args.payload?.user?.benefits;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.DELETE_BENEFIT_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};

export const updateBenefitReducer = (
  state: UpdateBenefitStoreShape = initialStateUpdateBenefit,
  args: UpdateBenefitAction
): UpdateBenefitStoreShape => {
  switch (args.type) {
    case ActionTypes.UPDATE_BENEFIT_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
        draftState.errors = [];
      });

    case ActionTypes.UPDATE_BENEFIT_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.id = args.payload?.user?.id;
        draftState.value.title = args.payload?.user?.title;
        draftState.value.description = args.payload?.user?.description;
        draftState.value.category = args.payload?.user?.category;
        draftState.value.price = args.payload?.user?.price;
        draftState.value.location = args.payload?.user?.location;
        draftState.value.avaibility = args.payload?.user?.avaibility;
        draftState.value.pictures = args.payload?.user?.pictures;
        draftState.value.token = args.payload?.user?.token;
        draftState.value.message = args.payload?.user?.message;
        draftState.value.message_email = args.payload?.user?.message_email;
        draftState.errors = [];
        draftState.pending = false;
      });

    case ActionTypes.UPDATE_BENEFIT_FAILURE:
      return produce(state, (draftState) => {
        draftState.errors = args.payload.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};
