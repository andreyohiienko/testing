import React from 'react'
import { mount } from 'enzyme'

import CommentList from '~/CommentList'
import Root from 'src/Root'

let wrapped

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2'],
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>,
  )
})

it('creates one LI per comment', () => {
  console.log(wrapped.find('li').length)
})
