import React from 'react';
import Language from '../../constants/Texts';

import { Container, Message } from './styles';

export default function NotFound() {
  return (
    <Container>
      <Message>{Language.MESSAGE_USER_NOT_FOUND}</Message>
    </Container>
  );
}
