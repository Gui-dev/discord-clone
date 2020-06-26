import React from 'react'

import UserRow from './UserRow'
import { Container, Role } from './style'

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Gui Silva"/>

      <Role>Offline - 18</Role>
      <UserRow nickname="Jessi Lara" isBot/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
    </Container>
  )
}

export default UserList
