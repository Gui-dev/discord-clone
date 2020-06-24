import React from 'react';

import ServerList from './../ServerList'
import ServerName from './../ServerName'

import { Grid } from './style'

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
    </Grid>
  )
}

export default Layout;