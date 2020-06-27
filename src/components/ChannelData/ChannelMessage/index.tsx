import React from 'react';

import { Container, Avatar, Message, Header, Content } from './style'
export { Mention } from './style'

interface Props {
  author: string,
  date: string,
  content: string | React.ReactElement | React.ReactNode,
  hasMention?: boolean,
  isBot?: boolean,
}

const ChannelMessage: React.FC<Props> = ( { author, date, content, hasMention, isBot } ) => {
  return (
    <Container className={ hasMention ? 'mention' : '' }>
      <Avatar className={ isBot ? 'bot' : '' }/>

      <Message>
        <Header>
          <h1>{ author }</h1>
          { isBot && <span>Bot</span>}

          <time>{ date }</time>
        </Header>

        <Content>
          { content }
        </Content>
      </Message>
    </Container>
  )
}

export default ChannelMessage;
