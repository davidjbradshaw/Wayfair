import { cleanup, fireEvent, render } from '@testing-library/react'
import { identity } from 'ramda'

import AppBarContanier from './app-bar-container'

const testAppBar = (open, setOpen = identity) =>
  render(<AppBarContanier open={open} setOpen={setOpen} />)

describe('AppBarContanier', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders (open)', () => {
    expect(testAppBar(true).container).toMatchSnapshot()
  })

  test('renders (closed)', () => {
    expect(testAppBar(false).container).toMatchSnapshot()
  })

  test('setOpen called when clicked', () => {
    const setOpen = jest.fn(identity)
    const burgerButton = testAppBar(false, setOpen).getByTestId('sidebar-open')

    expect(setOpen).toHaveBeenCalledTimes(0)
    fireEvent.click(burgerButton)
    expect(setOpen).toHaveBeenCalled()
  })
})
