import React from 'react';
import Lottie from 'react-lottie';
import loading from '../../assets/loading.json';

import Container from './styles';

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
    </Container>
  );
}
