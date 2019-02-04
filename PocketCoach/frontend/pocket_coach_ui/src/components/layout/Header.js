import React from 'react'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'


export default (props) =>
	<AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit" style={{flex:1}}>
            PocketCoach
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>