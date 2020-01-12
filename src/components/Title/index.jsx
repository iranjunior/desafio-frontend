import React from 'react';

import { Container, Banner, Detach } from './styles';

export default function Title() {
  return (
    <Container>
      <Banner>
        Github
        {' '}
        <Detach>Search</Detach>
      </Banner>
    </Container>
  );
}
