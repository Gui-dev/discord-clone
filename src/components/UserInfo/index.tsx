import React from 'react'

import { Container, Profile, Avatar, UserData, Icons,
  MicIcon, HeadphoneIcon, SettingsIcon
} from './style'

const UserInfo: React.FC = () => {
  return (
    <Container>

      <Profile>
        <Avatar>

        </Avatar>
        <UserData>
          <h1>gui.svg</h1>
          <span>#1999</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>

    </Container>
  )
}

export default UserInfo
