import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import React from 'react'

import Icon from './icon'

const menuStyle = {
  marginTop: '32px',
}

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Icon onClick={handleClick} />
      {Boolean(anchorEl) && (
        <Menu
          id="simple-menu"
          style={menuStyle}
          anchorEl={anchorEl}
          keepMounted
          open
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Account Settings</MenuItem>
          <MenuItem onClick={handleClose}>User Management</MenuItem>
          <MenuItem onClick={handleClose}>My Team</MenuItem>
          <MenuItem onClick={handleClose}>English (UK)</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      )}
    </>
  )
}
