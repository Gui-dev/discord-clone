import styled from 'styled-components'
import { Mic, Headset, Settings } from '@styled-icons/material'

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, .2);
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: var(--gray);
  border-radius: 50%;
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;


  > h1 {
    display: block;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
    margin-bottom: 2px;
  }

  > span {
    font-size: 12px;
    color: var(--gray);
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 7px;
  }
`

export const MicIcon = styled(Mic)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: .7;
  transition: opacity .2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`

export const HeadphoneIcon = styled(Headset)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: .7;
  transition: opacity .2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`

export const SettingsIcon = styled(Settings)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: .7;
  transition: opacity .2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`
