import * as input from '../../src/reducers/input'
import * as inputActions from '../../src/actions/input'

describe('input reducer', () => {
    it('should return the initial state', () => {
      expect(input.reducer(undefined, {})).toEqual(
        {
          input: {
              text: ""
          }
        }
      )
    })

    it('should handle ADD_TODO', () => {
      expect(
        input.reducer({input: {text: "hello"}}, {
          type: inputActions.ActionTypes.ADD_ITEM,
          payload: { input: {text: 'Run the tests'} }
        })
      ).toEqual(
        {
          input: {
            text: 'Run the tests'
          }
        }
      )
    })
})


