import * as input from '../../src/actions/input'

describe('input action', () => {
    it('should create an action to add an item', () => {
        const text = 'spacemesh'
        const expectedAction = {
            type: input.ActionTypes.ADD_ITEM,
            payload: {
                input: {
                    text
                }
            }
        }
        expect(input.addItem(text)).toEqual(expectedAction)
    })
})