import { combineReducers } from "@reduxjs/toolkit";
import {
  changeLanguageReducer,
  setLanguagesReducer,
} from "./languages-reducers";
import {
  setServerNotificationsReducer,
  toastnotificationReducer,
} from "./server-notifications-reducer";
import {
  authenticatedUserReducer,
  forgotPasswordReducer,
  registerReducer,
  resendPinCodeReducer,
  resetPasswordReducer,
  signOutReducer,
  verifyIdentityReducer,
  verifyRegistrationReducer,
} from "./oauth-reducers";
import { deleteProfileReducer, profilesReducer, profileUserReducer, updateEmailReducer, updateNotificationReducer, updateOtpEmailReducer, updateParamsReducer, updatePhoneReducer, updatePictureReducer, updateProfileReducer, updateWebsiteReducer } from "./profile-reducers";
import { categoriesReducer, categoryReducer, deleteCategoryReducer, updateCategoryReducer } from "./category-reducers";
import { benefitReducer, benefitsReducer, deleteBenefitReducer, updateBenefitReducer } from "./benefit-reducers";

const rootReducer = combineReducers({

  // Authentication Reducers
  authenticatedUser: authenticatedUserReducer,
  register: registerReducer,
  verifyIdentity: verifyIdentityReducer,
  resendPinCode: resendPinCodeReducer,
  verifyRegistration: verifyRegistrationReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  signOut: signOutReducer,

  // Update User Profile Reducers
  profileUser: profileUserReducer,
  profiles: profilesReducer,
  deleteProfile: deleteProfileReducer,
  updateProfile: updateProfileReducer,
  updateParams: updateParamsReducer,
  updatePicture: updatePictureReducer,
  updateEmail: updateEmailReducer,
  updateOtpEmail: updateOtpEmailReducer,
  updatePhone: updatePhoneReducer,
  updateWebsite: updateWebsiteReducer,
  updateNotification: updateNotificationReducer,

  // Set Categories Benefit Reducers
  category: categoryReducer,
  categories: categoriesReducer,
  deleteCategory: deleteCategoryReducer,
  updateCategory: updateCategoryReducer,

  // Set Benefits Reducers
  benefit: benefitReducer,
  benefits: benefitsReducer,
  deleteBenefit: deleteBenefitReducer,
  updateBenefit: updateBenefitReducer,

  serverNotifications: setServerNotificationsReducer,
  toastNotifications: toastnotificationReducer,
  appLanguages: setLanguagesReducer,
  currentLanguage: changeLanguageReducer,
});

export default rootReducer;
