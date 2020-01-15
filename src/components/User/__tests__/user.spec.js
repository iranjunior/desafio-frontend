/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';

import User from '../index';
import * as Payload from './__payloads__/user.json';

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
    expect(Wrapper[0].children.length).toBe(3);
  });
  it('Deve renderizar o componente todo vazio devido ao payload vazio', () => {
    const store = mockStore(Payload.NoBody);
    const Wrapper = render(
      <Provider store={store}>
        <User />
      </Provider>,
    );
    expect(Wrapper[0].children.length).toBe(3);
  });
  it('Deve Falhar devido o payload ir errado', () => {
    const store = mockStore(Payload.Failed);
    try {
      render(
        <Provider store={store}>
          <User />
        </Provider>,
      );
    } catch (error) {
      expect(error).toThrow();
    }
  });
});
