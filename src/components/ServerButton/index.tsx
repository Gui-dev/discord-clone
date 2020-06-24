import React from 'react'

import logo from './../../assets/logo-rocketseat.svg'
import { Button } from './style'

export interface Props {
  selected?: boolean,
  isHome?: boolean,
  hasNotifications?: boolean,
  mentions?: number,
}
 
const ServerButton: React.FC<Props> = ( { selected, isHome, hasNotifications, mentions } ) => {
  return (
    <Button 
      isHome={ isHome }
      hasNotifications={ hasNotifications }
      mentions={ mentions }
      className={ selected ? 'active' : '' }
    >
      { isHome && ( <img src={ logo } alt="Rocketseat" title="Rocketseat"/> ) }
    </Button>
  )
}

export default ServerButton