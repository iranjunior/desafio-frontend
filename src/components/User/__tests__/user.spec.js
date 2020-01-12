import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';

import User from '../index';
import * as Payload from './__payloads__/user';

let mockStore;
describe('Testes unitarios do titulo', () => {
  beforeAll(() => {
    mockStore = configureStore([]);
  });
  it('Deve renderizar o componente sem erros', () => {
    const store = mockStore(Payload.Success);
    const Wrapper = render(
      <Provider store={store}>
        <User />
      </Provider>,
    );
    expect(Wrapper[0].children.length).toBe(9);
    expect(Wrapper[0].firstChild.attribs.src).toBe('https://via.placeholder.com/150');
  });
  it('Deve renderizar o componente todo vazio devido ao payload vazio', () => {
    const store = mockStore(Payload.NoBody);
    const Wrapper = render(
      <Provider store={store}>
        <User />
      </Provider>,
    );
    expect(Wrapper[0].children.length).toBe(9);
    expect(Wrapper[0].firstChild.attribs.src).toBe('');
  });
  it('Deve Falhar devido o payload ir errado', () => {
    const store = mockStore(Payload.Failed);
    try {
      const Wrapper = render(
        <Provider store={store}>
          <User />
        </Provider>,
      );
    } catch (error) {
      expect(error).toThrow();
    }
  });
});
