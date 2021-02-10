import Header from './index'

test('renders header', () => {
  expect(<Header />).toMatchSnapshot()
})
