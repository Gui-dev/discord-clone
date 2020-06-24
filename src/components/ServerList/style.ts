import styled from 'styled-components'

export const Container = styled.div`
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;
  padding: 11px 0;
  background-color: var(--tertiary);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none
  }
`

export const ServerButton = styled.div`
  
`

export const Separator = styled.div`
  width: 32px;
  margin-bottom: 8px;
  border-bottom: 2px solid var(--quaternary)
`
