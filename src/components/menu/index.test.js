import { render } from '@testing-library/react'
import Menu from './index'

test('renders Menu', () => {
  const { container } = render(<Menu />)
  expect(container).toMatchSnapshot()

  // TODO add open and close tests for Menu
})
