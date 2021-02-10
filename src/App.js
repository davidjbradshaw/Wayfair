import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import AppBarContanier from './components/app-bar-container'
import DrawerContanier from './components/drawer-container'
import MainContainer from './components/main-container'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}))

export default function MiniDrawer() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarContanier open={open} setOpen={setOpen} />
      <DrawerContanier open={open} setOpen={setOpen} />
      <MainContainer />
    </div>
  )
}
