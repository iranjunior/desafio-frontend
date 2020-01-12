/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'enzyme';
import Lodding from '../index';

describe('Testes unitarios do titulo', () => {
  it('Deve renderizar o componente sem erros', () => {
    const Wrapper = render(<Lodding />);
    const values = Object.values(Wrapper[0].firstChild.attribs);
    expect(values.includes('animation')).toBeTruthy();
  });
});
