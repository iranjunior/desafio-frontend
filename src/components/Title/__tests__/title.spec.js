/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'enzyme';
import Title from '../index';

describe('Testes unitarios do titulo', () => {
  it('Deve renderizar o componente sem erros', () => {
    const Wrapper = render(<Title />);
    expect(Wrapper.text()).toBe('Github Search');
  });
});
