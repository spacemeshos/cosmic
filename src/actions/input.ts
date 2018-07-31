import { InputModel } from '../model';

export enum ActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    DELETE_ITEM = 'DELETE_ITEM',
}

export interface IAddItemAction {type: ActionTypes.ADD_ITEM, payload: {input: InputModel}}

export function addItem(text: string): IAddItemAction {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            input: {
                "text": text                
            }
        }
    }
}

export type Action = IAddItemAction
