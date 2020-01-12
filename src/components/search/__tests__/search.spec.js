import React from 'react';
import { render, shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Search from '../index';
import * as Payloads from './__payloads__/username';

let mockStore;

describe('Testes unitarios do Formulario', () => {
  beforeAll(() => {
    mockStore = configureStore([]);
  });

  it('Deve renderizar o componente sem erros', () => {
    const store = mockStore(Payloads.Success);
    const Wrapper = render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );
    expect(Wrapper.first()[0].tagName).toBe('form');
  });
  it('Deve renderizar o componente sem erros', () => {
    const mockSubmit = jest.fn();
    const store = mockStore(Payloads.Success);
    const Wrapper = mount(
      <Provider store={store}>
        <Search handleClick={mockSubmit} />
      </Provider>,
    );
    Wrapper.find('button').simulate('click');
    expect(mockSubmit).toHaveBeenCalled();
  });
});
