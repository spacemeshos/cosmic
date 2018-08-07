import * as fromInput from "./input";
import {combineReducers} from "redux";

export interface IState {
    input: fromInput.IState
}

export const initialState: IState = {
    input: fromInput.initialState
}
// create reducer for all reducers
export const reducer = combineReducers<IState>({
    input: fromInput.reducer
})