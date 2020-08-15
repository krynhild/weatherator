import {LOAD_FAILURE, LOAD_SUCCESS} from "./data.actions";
import {AnyAction} from "redux";

const initialState = {
    error: null
};

export const reducer = (state = initialState, {type, payload}: AnyAction) => {
    switch (type) {
        case LOAD_SUCCESS:
            return {
                ...payload,
                error: null,
                success: true
            }
        case LOAD_FAILURE:
            return {
                error: payload,
                success: false
            }
        default:
            return state;
    }
};
