import { render } from '@testing-library/react'
import identity from 'ramda'

import DrawerContanier from './drawer-container'

function testDrawerContanier(open) {
  const { container } = render(
    <DrawerContanier open={open} setOpen={identity} />
  )
  expect(container).toMatchSnapshot()

  // TODO add close button test
}

test('renders DrawerContanierContanier (open)', () => {
  testDrawerContanier(true)
})

test('renders DrawerContanierContanier (closed)', () => {
  testDrawerContanier(false)
})
