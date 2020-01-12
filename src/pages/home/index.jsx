import React from 'react';
import Title from '../../components/Title';
import Search from '../../components/search';

import Container from './styles';

export default function Home({ history, match }) {
  return (
    <Container>
      <Title />
      <Search history={history} match={match} />
    </Container>
  );
}
