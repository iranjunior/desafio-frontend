/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'enzyme';
import NotFound from '../index';

describe('Testes unitarios do Not Found', () => {
  it('Deve renderizar o componente sem erros', () => {
    const Wrapper = render(<NotFound />);
    expect(Wrapper.text()).toBe('User not Found :(');
  });
});
