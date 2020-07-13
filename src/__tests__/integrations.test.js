import React from 'react'
import { mount } from 'enzyme'
import Root from 'src/Root'
import App from '~/App'

it('can fetch a list of comments and display them', () => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>,
  )
  // find the 'fetchComments' button click it
  // Expect to find a list of comments!
})
