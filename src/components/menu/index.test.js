import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'

import SimpleMenu from './index'

const closes = (text) => {
  test(text, async () => {
    const { getByTestId, findByText } = render(<SimpleMenu />)

    const button = getByTestId('account-menu-button')
    fireEvent.click(button)

    const menuItem = await findByText(text)
    fireEvent.click(menuItem)

    expect(menuItem).toMatchSnapshot()

    await waitFor(() => {
      expect(menuItem).not.toBeInTheDocument()
    })
  })
}

describe('Account SimpleMenu', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders closed', () => {
    const { container, getByText, queryByText } = render(<SimpleMenu />)
    expect(container).toMatchSnapshot()

    expect(getByText('account_circle')).toBeInTheDocument()
    expect(queryByText('Account Settings')).not.toBeInTheDocument()
  })

  test('opens', async () => {
    const { getByTestId, findByText } = render(<SimpleMenu />)

    const button = getByTestId('account-menu-button')
    expect(button).toMatchSnapshot()
    fireEvent.click(button)

    const menuItem = await findByText('Account Settings')
    expect(menuItem).toBeInTheDocument()
  })

  describe('closes', () => {
    const menuItems = [
      'Account Settings',
      'User Management',
      'My Team',
      'English (UK)',
      'Logout',
    ]

    menuItems.map((item) => closes(item))
  })
})
