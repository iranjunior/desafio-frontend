/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Results from '../index';
import Payload from './__payloads__/repository.json';

let mockStore;
describe('Testes unitarios da pagina de Home', () => {
  const useEffectSpy = jest.spyOn(React, 'useEffect');
  useEffectSpy.mockImplementation((cb) => { cb(); });

  beforeEach(() => {
    mockStore = configureStore([]);
  });

  it('Deve renderizar o componente sem erros', () => {
    const store = mockStore(Payload.Success);
    const mockMatch = {
      params: {
        username: 'rubens',
      },
    };
    const Wrapper = render(
      <Provider store={store}>
        <Results match={mockMatch} />
      </Provider>,
    );

    expect(Wrapper[0].childNodes.length).toBe(2);
    expect(Wrapper[0].childNodes[0].name).toBe('header');
    expect(Wrapper[0].childNodes[1].name).toBe('section');
    expect(Wrapper[0].childNodes[0].childNodes[1].name).toBe('form');
    expect(Wrapper[0].childNodes[1].children[0].firstChild.firstChild.attribs.src).toBe('https://via.placeholder.com/150');
    expect(Wrapper[0].childNodes[1].children[1].firstChild.firstChild.firstChild.data).toBe('Lorem ipsum');
  });
});
