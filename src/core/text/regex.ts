import { PhoneNumberUtil, PhoneNumberFormat } from "google-libphonenumber";

export const isEmail = (email: string) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(email)?.toLowerCase()
  );
};

export const isNumber = (value: string) => {
  return /^[0-9]+$/.test(String(value)?.toLowerCase());
};
export const isContainsLetterAndNumber = (value: string): boolean => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(String(value));
};
function addValueInObject(object: object, key: string, value: string) {
  let res = {};
  const textObject = JSON.stringify(object);
  if (textObject === "{}") {
    res = JSON.parse('{"' + key + '":"' + value + '"}');
  } else {
    res = JSON.parse(
      "{" +
        textObject.substring(1, textObject.length - 1) +
        ',"' +
        key +
        '":"' +
        value +
        '"}'
    );
  }
  return res;
}

export const extractParamsUrl = (url: string) => {
  url = url.replace("?", "");
  const urls = url.split("&");
  let result = {};

  urls.forEach(function (el) {
    const param = el.split("=");
    result = addValueInObject(result, param[0], param[1]);
  });

  return result;
};

export enum ValidationType {
  REQUIRED,
  EMAIL,
  EMAIL_NOT_REQUIRED,
  PHONE_NUMBER,
  EQUAL,
  TRUE,
}

interface ValidationTypeEqualProps {
  equal: string;
}

type ValidatorTypes = ValidationTypeEqualProps;

export type Validator = ValidatorInterface<ValidatorTypes>;

export interface ValidatorInterface<ValidatorTypes> {
  validatorType?: ValidationType;
  message?: string;
  props?: ValidatorTypes;
}

export interface ValidationResponse {
  valid: boolean;
  errors: Validator;
}
export const validateFormData = (
  value: any,
  validators: Validator,
  regionCode?: string
): ValidationResponse => {
  const response: ValidationResponse = {
    valid: true,
    errors: {},
  };

  switch (validators.validatorType) {
    case ValidationType.REQUIRED:
      if (value === undefined || value === null || value?.trim() === "") {
        response.errors = validators;
      }
      break;
    case ValidationType.EMAIL:
      if (
        !String(value)
          ?.toLowerCase()
          ?.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        response.errors = validators;
      }
      break;
    // case ValidationType.EMAIL_NOT_REQUIRED:
    //   if (
    //     String(value)?.length > 0 &&
    //     !String(value)
    //       ?.toLowerCase()
    //       ?.match(
    //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //       )
    //   ) {
    //     response.errors = validators;
    //   }
    //   break;
    case ValidationType.PHONE_NUMBER:
      try {
        const phoneUtil = PhoneNumberUtil.getInstance();
        const number = phoneUtil.parse(value, regionCode);
        const formatted = phoneUtil.format(
          number,
          PhoneNumberFormat.INTERNATIONAL
        );
        if (phoneUtil.isValidNumber(number))
          console.log("Phone number: ", formatted);
        else {
          response.errors = validators;
        }
        console.log("regionCode: ", regionCode);
      } catch (err) {
        console.error(
          "Erreur lors de l'initialisation de l'objet PhoneNumberUtil",
          err
        );
        response.errors = validators;
      }

      break;
    case ValidationType.EQUAL:
      if (validators.props?.equal && value !== validators.props?.equal) {
        response.errors = validators;
      }

      break;
    case ValidationType.TRUE:
      if (value as boolean) {
        response.errors = validators;
      }

      break;
  }

  if (response.errors !== null) response.valid = false;

  return response;
};
