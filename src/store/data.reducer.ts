import { LOAD_FAILURE, LOAD_SUCCESS } from "./data.actions";

const initialState = {
  data: [],
  error: {}
};

export const reducer = (state = initialState, {type, payload} : { type: String; payload: Array<object> | object; }) => {
  switch (type) {
    case LOAD_SUCCESS:
      return {
        ...state,
        data: payload,
        error: {}
      }
    case LOAD_FAILURE:
      return {
        ...state,
        data: [],
        error: payload
      }
    default:
      return state;
  }
};
