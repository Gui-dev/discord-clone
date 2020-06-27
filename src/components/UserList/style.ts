import styled from 'styled-components'

export const Container = styled.div`
  grid-area: UL;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 46px);
  padding: 3px 6px 0 16px;
  background-color: var(--secondary);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`

export const Role = styled.h2`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--gray);
  margin-top: 20px;
`
