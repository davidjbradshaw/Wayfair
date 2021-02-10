import DrawerContanier from './drawer-container'
import identity from 'ramda'

test('renders DrawerContanier', () => {
  expect(<DrawerContanier open={true} setOpen={identity} />).toMatchSnapshot()
  expect(<DrawerContanier open={false} setOpen={identity} />).toMatchSnapshot()
  /*
   *  I would really like to add a test to press the button and check that setOpen
   *  gets called here, but it's been over a year since I did much UI React dev.
   *  In the past I would of used Enzyme. These days TestingLibrary looks more
   *  interesting but I have not had the chance to use it yet
   *
   */
})
