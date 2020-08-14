import {Action, ActionCreator, Dispatch} from 'redux';
import {DataService} from "../services/data.service";

export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_FAILURE = "LOAD_FAILURE";

export const load = (city: String) => async (dispatch: Dispatch, getState: Function, {api} : {api: DataService}) => {
    try {
        const result = await api.get(city);
        dispatch(loadSuccess(result.data));
    } catch (e) {
        dispatch(loadFailure(e.response))
    }
}

export const loadSuccess: ActionCreator<Action> = (data: any) => ({
    type: LOAD_SUCCESS,
    payload: data
});

export const loadFailure: ActionCreator<Action> = (error: any) => ({
    type: LOAD_FAILURE,
    payload: error
});
