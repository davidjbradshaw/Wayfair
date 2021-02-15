import { cleanup, fireEvent, render } from '@testing-library/react'
import { identity } from 'ramda'

import DrawerContanier from './drawer-container'

const testDrawerContanier = (open, setOpen = identity) =>
  render(<DrawerContanier open={open} setOpen={setOpen} />)

describe('DrawerContanier', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders (open)', () => {
    expect(testDrawerContanier(true).container).toMatchSnapshot()
  })

  test('renders (closed)', () => {
    expect(testDrawerContanier(false).container).toMatchSnapshot()
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
