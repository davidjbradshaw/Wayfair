import { cleanup, fireEvent, render } from '@testing-library/react'
import { identity } from 'ramda'

import AppBarContanier from './app-bar-container'

const testAppBar = (open, setOpen = identity) =>
  render(<AppBarContanier open={open} setOpen={setOpen} />)

const snapContainer = (open) =>
  expect(testAppBar(open).container).toMatchSnapshot()

describe('AppBarContanier', () => {
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
    const burgerButton = testAppBar(false, setOpen).getByTestId('sidebar-open')

    expect(setOpen).toHaveBeenCalledTimes(0)
    fireEvent.click(burgerButton)
    expect(setOpen).toHaveBeenCalled()
  })
})
