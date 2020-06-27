import React, { useEffect, useRef } from 'react';

import ChannelMessage, { Mention } from './ChannelMessage'
import { Container, Messages, InputWrapper, Input, InputIcon } from './style'

const ChannelData: React.FC = () => {

  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect( () => {
    const div = messageRef.current

    if( div ) {
      div.scrollTop = div.scrollHeight
    }
  }, [] )

  return (
    <Container>
      <Messages ref={ messageRef }>

        { Array.from( Array( 15 ).keys() ).map( ( n: number ) => (
          <ChannelMessage
            key={ n }
            author="Gui Silva"
            date="26/06/2020"
            content="Happy Birthday"
          />
        ) ) }


        <ChannelMessage
          author="Gui Silva"
          date="26/06/2020"
          isBot
          content={
            <>
              <Mention>@gui.svg</Mention>, eu ai outra vez!
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;
