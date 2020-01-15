import React from 'react';
import { eng } from '../../constants/Texts';

import { Container, Banner, Detach } from './styles';

export default function Title({ position, history, link }) {
  const handleClick = () => {
    if (link === 'actived') { history.push('/'); }
  };
  return (
    <Container position={position}>
      <Banner link={link} onClick={handleClick}>
        Github
        {' '}
        <Detach link={link}>
          {' '}
          {eng.MESSAGE_SEARCH}
          {' '}
        </Detach>
      </Banner>
    </Container>
  );
}
