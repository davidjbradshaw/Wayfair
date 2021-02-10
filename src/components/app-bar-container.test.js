import { render } from '@testing-library/react'
import identity from 'ramda'

import AppBarContanier from './app-bar-container'

function testAppBar(open) {
  const { container } = render(
    <AppBarContanier open={true} setOpen={identity} />
  )
  expect(container).toMatchSnapshot()

  /*
   *  I would really like to add a test to press the button and check that setOpen
   *  gets called here, but it's been over a year since I did much UI React dev.
   *  In the past I would of used Enzyme. These days TestingLibrary looks more
   *  interesting but I have not had the chance to use it before today
   *
   */
}

test('renders AppBarContanier (open)', () => {
  testAppBar(true)
})

test('renders AppBarContanier (closed)', () => {
  testAppBar(false)
})
