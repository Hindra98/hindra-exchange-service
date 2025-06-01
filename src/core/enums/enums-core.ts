export enum VerificationTypeEnum {
  FOR_INSTANT_VERIFICATION = 2,
  FOR_IDENTITY_VERIFICATION = 4,
}
export enum ContactTypeEnum {
  EMAIL = "email",
  SMS = "SMS",
}

export enum AlignEnum {
  LEFT = "me-auto",
  CENTER = "mx-auto",
  RIGHT = "ms-auto",
}

export enum GeofenceTypeEnum {
  ORIGIN = 100,
  INTERMEDIATE = 200,
  DESTINATION = 300,
}

export enum TripColorEnum {
  NOT_STARTED = "#4f46e5", //100 ==> Bleu #3b82f6 (#4f46e5 syncfusion)
  STARTED = "#eab308", //200 ==> Jaune
  CANCELLED = "#999", //300 ==> Gris
  OVER = "#22c55e", //400 ==> Vert
}

export enum TripColorTextEnum {
  NOT_STARTED = "text-fxblue", //100 ==> Bleu #3b82f6 (#4f46e5 syncfusion)
  STARTED = "text-fxorange", //200 ==> Jaune
  CANCELLED = "text-fxgray", //300 ==> Gris
  OVER = "text-fxgreen", //400 ==> Vert
}

export enum TripStatusEnum {
  NOT_STARTED = 100,
  STARTED = 200,
  CANCELLED = 300,
  OVER = 400,
}

export enum DriverColorEnum {
  IS_WAITING = "#22c55e", //100 ==> Vert
  IS_ON_HIS_WAY = "#eab308", //200 ==> Orange
  IS_ON_LEAVE = "#4f46e5", //300 ==> Bleu
  IS_UNAVAILABLE = "#999", //400 ==> Gris
}

export enum DriverColorTextEnum {
  IS_WAITING = "text-fxgreen", //100 ==> Vert
  IS_ON_HIS_WAY = "text-fxorange", //200 ==> Orange
  IS_ON_LEAVE = "text-fxblue", //300 ==> Bleu
  IS_UNAVAILABLE = "text-fxgray", //400 ==> Gris
}

export enum DriverStatusEnum {
  IS_WAITING = 100,
  IS_ON_HIS_WAY = 200,
  IS_ON_LEAVE = 300,
  IS_UNAVAILABLE = 400,
}

export enum PackageDropdownTypeEnum {
  NATURE_SHIPPING = "naturesOfShipping",
  EXPEDITION_MODE = "expeditionMode",
  TVA = "tva",
  DELAI = "delai",
  IS_VAT_APPLICABLE = "isVatApplicable",
}

export enum ExpeditionModeValueEnum {
  STANDARD = 1,
  EXPRESS = 1.25, // 25%
  INTERNATIONAL = 1.5, // 50%
}

export enum PackageNatureShippingValueEnum {
  COMPANY_TO_COMPANY = 100,
  COMPANY_TO_PERSON = 200,
  PERSON_TO_COMPANY = 300,
  PERSON_TO_PERSON = 400,
}

export enum PackageloadingEnum {
  BOARDING = "boarding",
  DISEMBARKATION = "disembarkation",
  STORAGE = "storage",
  DESTOCKING = "destocking",
  BOARDING_LIST = "boarding-list",
  DISEMBARKATION_LIST = "disembarkation-list",
}

export enum SortByEnum {
  SIZE = "size",
  WEIGHT = "weight",
  VOLUME = "volume",
}

export enum ClaimsFuncEnum {
  FOLLOW_COMPLAINTS = "follow",
  ADD_COMPLAINT = "add",
  COMPLAINTS_LIST = "complaints-list",
}


export enum ClaimsTypeEnum {
  PACKAGE_LOST = 100,
  PACKAGE_DAMAGED = 200,
  OTHER = 300,
}

export enum ClaimsTypeWordingEnum {
  PACKAGE_LOST = "Perte de colis",
  PACKAGE_DAMAGED = "Colis endommagé",
  OTHER = "Autre",
}

export enum ClaimsStatusTypeEnum {
  ON_HOLD = 100,
  WAITING_PROCESS = 200,
  WAITING_PROCESS_DOC = 300,
  FINISHED = 400,
}


export enum ClaimsStatusTypeWordingEnum {
  ON_HOLD = "En attente",
  WAITING_PROCESS = "En cours de traitement",
  WAITING_PROCESS_DOC = "Compléments d'informations",
  FINISHED = "Terminé",
}

export enum MaintenanceFuncEnum {
  ADD_REQUEST_DIAGNOSTIC = "add-diagnostic",
  DIAGNOSTIC_LIST = "diagnostic-list",
  MY_DIAGNOSTIC_LIST = "my-diagnostic-list",

}


export enum MaintenanceTypeEnum {
  PACKAGE_LOST = 100,
  PACKAGE_DAMAGED = 200,
  OTHER = 300,
}

export enum MaintenanceTypeWordingEnum {
  PACKAGE_LOST = "Perte de colis",
  PACKAGE_DAMAGED = "Colis endommagé",
  OTHER = "Autre",
}

export enum MaintenanceStatusTypeEnum {
  ON_HOLD = 100,
  WAITING_PROCESS = 200,
  WAITING_PROCESS_DOC = 300,
  FINISHED = 400,
  DISMISS = 500,
}


export enum MaintenanceStatusTypeWordingEnum {
  ON_HOLD = "En attente",
  WAITING_PROCESS = "En cours de traitement",
  WAITING_PROCESS_DOC = "Compléments d'informations",
  FINISHED = "Approuvé",
  DISMISS = "Rejeter",
}

export enum ServiceRequestPurchaseTypeEnum {
  RH = 100,
  FINANCE = 200,
  TFC = 300,
}

export enum ServiceRequestPurchaseTypeWordingEnum {
  RH = "Ressources humaines",
  FINANCE = "Finances",
  TFC = "TFC",
}


export enum SaisonTypeEnum {
  DAY = 100,
  WEEK = 200,
  MONTH = 300,
  YEAR = 400,
}

export enum OrdinalNumberTypeEnum {
  FIRST = 100,
  SECOND = 200,
  THIRD = 300,
  LAST = 400,
}

export enum DaysTypeEnum {
  MONDAY = 100,
  TUESDAY = 200,
  WEDNESDAY = 300,
  THURSDAY = 400,
  FRIDAY = 500,
  SATURDAY = 600,
  SUNDAY = 700,
}
