import AppBarContanier from './app-bar-container'
import identity from 'ramda'

test('renders AppBarContanier', () => {
  expect(<AppBarContanier open={true} setOpen={identity} />).toMatchSnapshot()
  expect(<AppBarContanier open={false} setOpen={identity} />).toMatchSnapshot()
})
