import React from 'react';
import Language from '../../constants/Texts';

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
          {Language.MESSAGE_SEARCH}
          {' '}
        </Detach>
      </Banner>
    </Container>
  );
}
