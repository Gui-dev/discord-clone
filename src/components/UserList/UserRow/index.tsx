import React from 'react'

import { Container, Avatar } from './style'

interface Props {
  nickname: string,
  isBot?: boolean
}

const UserRow: React.FC<Props> = ( { nickname, isBot } ) => {
  return (
    <Container>
      <Avatar className={ isBot ? 'bot' : '' }/>
      <h1>{ nickname }</h1>
      { isBot && <span>Bot</span> }
    </Container>
  )
}

export default UserRow
