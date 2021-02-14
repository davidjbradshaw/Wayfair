import { render, screen } from '@testing-library/react'

import MainContanier from './main-container'

test('renders MainContanier', () => {
  const { container } = render(<MainContanier />)
  expect(container).toMatchSnapshot()

  const para = screen.getByText(/lorem/i)
  expect(para).toBeInTheDocument()

  const para2 = screen.getByText(/consequat/i)
  expect(para2).toBeInTheDocument()
})
