import { render } from '@testing-library/react'

import Header from './index'

test('renders header', () => {
  const { container } = render(<Header />)
  expect(container).toMatchSnapshot()
})
