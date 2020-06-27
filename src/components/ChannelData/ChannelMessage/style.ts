import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px;
  padding: 4px 16px;
  background-color: transparent;

  &.mention {
    padding-left: 14px;
    background-color: var(--mention-message);
    border-left: 2px solid var(--mention-detail);
  }

  & + div {
    margin-top: 40px;
  }
`

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--secondary);
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }
`

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 40px;
  margin-left: 17px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;

  > h1 {
    font-size: 16px;
    color: var(--white);
  }

  > span {
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--white);
    margin-left: 6px;
    padding: 4px 5px;
    background-color: var(--discord);
    border-radius: 4px;
  }

  > time {
    font-size: 13px;
    color: var(--gray);
    margin-left: 6px;
  }
`

export const Content = styled.div`
  font-size: 16px;
  color: var(--white);
  text-align: left;
`

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

