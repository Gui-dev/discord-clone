import React from 'react';

import ServerList from './../ServerList'
import ServerName from './../ServerName'
import ChannelInfo from './../ChannelInfo'

import { Grid } from './style'

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
    </Grid>
  )
}

export default Layout;