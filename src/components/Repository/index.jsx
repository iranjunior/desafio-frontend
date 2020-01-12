import React from 'react';
import { Star } from '../Icons/index';
import {
  Container, Title, Description, Field, Stars,
} from './styles';

export default function Repository({ repository }) {
  return (
    <Container>
      <Title>{repository.name}</Title>
      <Description>
        {' '}
        {repository.description}
        {' '}
      </Description>
      <Field>
        <Star />
        <Stars>{repository.stargazers_count}</Stars>
      </Field>
    </Container>
  );
}
