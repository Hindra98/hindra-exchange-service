
import { BenefitsAction, BenefitsFailurePayload, BenefitAction, BenefitFailurePayload, DeleteBenefitAction, DeleteBenefitFailurePayload, UpdateBenefitAction, UpdateBenefitFailurePayload } from ".";
import { ActionTypes } from "../constants/action-types";

export const benefit = (payload: BenefitCommand): BenefitAction => {
  return {
    type: ActionTypes.BENEFIT_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as BenefitAction;
};
export const benefitSuccess = (
  payload: BenefitSuccessPayload
): BenefitAction => {
  return {
    type: ActionTypes.BENEFIT_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as BenefitAction;
};
export const benefitFailure = (
  payload: BenefitFailurePayload
): BenefitAction => {
  return {
    type: ActionTypes.BENEFIT_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as BenefitAction;
};

export const benefits = (): BenefitsAction => {
  return {
    type: ActionTypes.BENEFITS_REQUEST,
    payload: {
      command: null,
      user: {},
      errors: {},
    },
  } as BenefitsAction;
};
export const benefitsSuccess = (
  payload: BenefitsSuccessPayload
): BenefitsAction => {
  return {
    type: ActionTypes.BENEFITS_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as BenefitsAction;
};
export const benefitsFailure = (
  payload: BenefitsFailurePayload
): BenefitsAction => {
  return {
    type: ActionTypes.BENEFITS_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as BenefitsAction;
};

export const deleteBenefit = (payload: DeleteBenefitCommand): DeleteBenefitAction => {
  return {
    type: ActionTypes.DELETE_BENEFIT_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as DeleteBenefitAction;
};
export const deleteBenefitSuccess = (
  payload: DeleteBenefitSuccessPayload
): DeleteBenefitAction => {
  return {
    type: ActionTypes.DELETE_BENEFIT_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as DeleteBenefitAction;
};
export const deleteBenefitFailure = (
  payload: DeleteBenefitFailurePayload
): DeleteBenefitAction => {
  return {
    type: ActionTypes.DELETE_BENEFIT_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as DeleteBenefitAction;
};

export const updateBenefit = (
  payload: UpdateBenefitCommand
): UpdateBenefitAction => {
  return {
    type: ActionTypes.UPDATE_BENEFIT_REQUEST,
    payload: {
      command: payload,
      user: {},
      errors: {},
    },
  } as UpdateBenefitAction;
};
export const updateBenefitSuccess = (
  payload: UpdateBenefitSuccessPayload
): UpdateBenefitAction => {
  return {
    type: ActionTypes.UPDATE_BENEFIT_SUCCESS,
    payload: {
      command: {},
      user: payload,
      errors: {},
    },
  } as UpdateBenefitAction;
};
export const updateBenefitFailure = (
  payload: UpdateBenefitFailurePayload
): UpdateBenefitAction => {
  return {
    type: ActionTypes.UPDATE_BENEFIT_FAILURE,
    payload: {
      command: {},
      user: {},
      errors: payload,
    },
  } as UpdateBenefitAction;
};
