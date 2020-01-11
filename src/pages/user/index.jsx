import React from 'react';

import { Container, Title } from './styles';

export default function Home({ match }) {
  return (
    <Container>
      <Title>{match.params.username}</Title>
    </Container>
  );
}
