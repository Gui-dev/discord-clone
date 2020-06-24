import styled from 'styled-components'

import { Props } from '.'

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  background-color: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};
  cursor: pointer;
  border-radius: 50%;

  > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    content: '';
    display: ${props => props.hasNotifications ? 'inline' : 'none'};
    width: 9px;
    height: 9px;
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);
    background-color: var(--white);
    border-radius: 50%;
  }

  &::after {
    content: '${props => props.mentions && props.mentions}';
    display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'};
    width: auto;
    height: 16px;
    position: absolute;
    bottom:-4px;
    right: -4px;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
    text-align: right;
    padding: 0 4px;
    background-color: var(--notification);
    border-radius: 12px;
    border: 4px solid var(--quaternary)
  }

  transition: border-radius .2s, background-color .2s;

  &.active, &:hover {
    border-radius: 16px;
    background-color: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--discord)' }
  }
`
