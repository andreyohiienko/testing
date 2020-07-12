import commentsReducer from 'src/reducers/comments'
import { SAVE_COMMENT } from 'src/actions/types'

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment',
  }

  const newState = commentsReducer([], action)
  expect(newState).toEqual(['New Comment'])
})
