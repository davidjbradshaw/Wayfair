import Button from '@material-ui/core/Button'

const iconStyle = {
  position: 'absolute',
  top: '14px',
  right: '0',
  color: '#7f187f',
}

const Menu = ({ onClick }) => (
  <Button
    aria-controls="simple-menu"
    aria-haspopup="true"
    onClick={onClick}
    style={iconStyle}
  >
    <span className="material-icons md-24">account_circle</span>
  </Button>
)

export default Menu
