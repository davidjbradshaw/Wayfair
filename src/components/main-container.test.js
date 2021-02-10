import { render, screen } from '@testing-library/react'
import MainContanier from './main-container'

test('renders MainContanier', () => {
  const { container } = render(<MainContanier />)
  expect(container).toMatchSnapshot()

  const para = screen.getByText(/Lorem/i)
  expect(para).toBeInTheDocument()

  const para2 = screen.getByText(/Consequat/i)
  expect(para2).toBeInTheDocument()
})
