import {IState} from "../reducers";
import {createSelector} from "reselect";

const getInputState = ((state: IState) => state.input)

export const getInput = createSelector([getInputState], s => s.input)