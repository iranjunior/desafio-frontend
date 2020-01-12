/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'enzyme';

import Repository from '../index';
import Payload from './__payloads__/repository.json';

// let mockStore;

describe('Testes unitarios do titulo', () => {
  it('Deve renderizar o componente sem erros', () => {
    // const store = mockStore(Payload.Success);
    const Wrapper = render(<Repository repository={Payload.Success} />);
    expect(Wrapper[0].children.length).toBe(3);
    expect(Wrapper[0].firstChild.firstChild.data).toBe('Lorem Ipsum');
  });
  it('Deve renderizar o componente todo vazio devido ao payload vazio', () => {
    const Wrapper = render(<Repository repository={Payload.NoBody} />);
    expect(Wrapper[0].children.length).toBe(3);
    expect(Wrapper[0].firstChild.firstChild).toBeNull();
  });

  it('Deve Falhar devido o payload ir errado', () => {
    try {
      render(<Repository repository={Payload.Failed} />);
    } catch (error) {
      expect(error).toThrow();
    }
  });
});
