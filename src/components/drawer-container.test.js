import { cleanup, fireEvent, render } from '@testing-library/react'
import { identity } from 'ramda'

import DrawerContanier from './drawer-container'

const testDrawerContanier = (open, setOpen = identity) =>
  render(<DrawerContanier open={open} setOpen={setOpen} />)

const snapContainer = (open) =>
  expect(testDrawerContanier(open).container).toMatchSnapshot()

describe('DrawerContanier', () => {
  afterEach(() => {
    cleanup()
  })

  // eslint-disable-next-line jest/expect-expect
  test('renders (open)', () => {
    snapContainer(true)
  })

  // eslint-disable-next-line jest/expect-expect
  test('renders (closed)', () => {
    snapContainer(false)
  })

  test('setOpen called when clicked', () => {
    const setOpen = jest.fn(identity)
    const burgerButton = testDrawerContanier(true, setOpen).getByTestId(
      'sidebar-close'
    )

    expect(setOpen).toHaveBeenCalledTimes(0)
    fireEvent.click(burgerButton)
    expect(setOpen).toHaveBeenCalled()
  })
})
