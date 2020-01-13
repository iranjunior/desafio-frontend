import React from 'react';
import { eng } from '../../constants/Texts';

import { Container, Banner, Detach } from './styles';

export default function Title() {
  return (
    <Container>
      <Banner>
        Github
        {' '}
        <Detach>
          {' '}
          {eng.MESSAGE_SEARCH}
          {' '}
        </Detach>
      </Banner>
    </Container>
  );
}
