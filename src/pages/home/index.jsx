import React from 'react';
import Title from '../../components/Title';
import Search from '../../components/search';

import { Container } from './styles';

export default function Home({ history }) {
  return (
    <Container>
      <Title />
      <Search history={history} />
    </Container>
  );
}
