/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import More from '../index';
import Language from '../../../constants/Texts';
import * as Payload from './__payloads__/ui.json';


describe('Testes unitarios do botao de more', () => {
  let mockStore;
  beforeAll(() => {
    mockStore = configureStore([]);
  });

  it('Deve renderizar o componente com o texto de mostrar mais', () => {
    const store = mockStore(Payload.SuccessShow);
    const Wrapper = render(<More store={store} />);
    expect(Wrapper.text()).toBe(Language.MESSAGE_HIDE);
  });

  it('Deve renderizar o componente com o texto de esconder', () => {
    const store = mockStore(Payload.SuccessHide);
    const Wrapper = render(<More store={store} />);
    expect(Wrapper.text()).toBe(Language.MESSAGE_MORE);
  });

  it('Deve simular click no botao', () => {
    const store = mockStore(Payload.SuccessHide);
    const mockDispatch = jest.fn(() => {});
    store.dispatch = mockDispatch;
    const Wrapper = mount(<More store={store} />);
    Wrapper.find('button').simulate('click');
    expect(mockDispatch).toHaveBeenCalled();
  });
});
