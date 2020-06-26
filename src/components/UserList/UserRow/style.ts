import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 5px;
  background: transparent;
  border-radius: 4px;
  transition: background .2s;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, .1);
  }

  > h1 {
    font-size: 16px;
    font-weight: 500;
    color: var(--white);
    margin-left: 13px;
    opacity: .7;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hiddden;
  }

  > span {
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--white);
    margin-left: 9px;
    padding: 4px 5px;
    background-color: var(--discord);
    border-radius: 4px;
  }
`

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background-color: var(--primary);
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }
`
