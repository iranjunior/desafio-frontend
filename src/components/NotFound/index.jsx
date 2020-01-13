import React from 'react';
import { eng } from '../../constants/Texts';

import { Container, Message } from './styles';

export default function NotFound() {
  return (
    <Container>
      <Message>{eng.MESSAGE_USER_NOT_FOUND}</Message>
    </Container>
  );
}
