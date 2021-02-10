import Menu from '../menu'
import logo from './logo.svg'

const headerStyle = {
  color: '#7f187f',
}

const logoStyle = {
  height: '28px',
  pointerEvents: 'none',
  margin: '15px 20px 10px',
}

const Header = () => (
  <header style={headerStyle}>
    <img src={logo} style={logoStyle} alt="Wayfair - Partner Home" />
    <Menu />
  </header>
)

export default Header
