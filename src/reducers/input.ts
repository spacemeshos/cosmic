import {InputModel} from "../model"
import { Action, ActionTypes } from "../actions";

export interface IState {
    input: InputModel
}

export const initialState: IState = {
    input: {
        text: ""
    }
}

/**
 * @description input reducer
 * @param {IState} state
 * @param {action} action
 */
export function reducer(state: IState = initialState, action: Action) {
    switch(action.type){
        case ActionTypes.ADD_ITEM: {
            const text = action.payload.input
            return {
                ...state,
                input: text
            }
        }

        default:
            return state
    }
}

