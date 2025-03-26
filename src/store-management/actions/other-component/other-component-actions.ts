import { ActionTypes } from "../constants/action-types";

export const setToggleSidebar = (payload: string) => { 
    return {
        type: ActionTypes.TOGGLE_SIDEBAR,
        payload: {
            query: payload,
        }
    };
};

