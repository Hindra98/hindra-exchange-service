import { coreConstants } from "@/core/constants/common-constants";
import { getStorage } from "@/core/storage/storage";

export interface ToggleStoreShape {
  value: boolean;
}

export const initialStateToggleSidebar: ToggleStoreShape = {
  value: getStorage(coreConstants.TOGGLE_SIDEBAR) === "true",
};
