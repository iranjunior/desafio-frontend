/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Results from '../index';
import Payload from './__payloads__/repository.json';
import Responses from './__payloads__/responses200.json';
import { getUser, getUserRepos } from '../../../services/api';

jest.mock('../../../services/api');

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
  });

  it('Deve tentar buscar usuarios sem erros', () => {
    const GithubUserMock = getUser.mockImplementation(() => Responses.user);
    const GithubUserReposMock = getUserRepos.mockImplementation(() => Responses.repositories);
    const store = mockStore(Payload.Success);
    const mockMatch = {
      params: {
        username: 'rubens',
      },
    };
    const Wrapper = mount(
      <Provider store={store}>
        <Results match={mockMatch} />
      </Provider>,
    );
    expect(GithubUserMock).toHaveBeenCalled();
    expect(GithubUserReposMock).toHaveBeenCalled();
    expect(Wrapper).toBeDefined();
  });

  it('Deve tentar falhar ao buscar usuario', () => {
    const GithubMock = getUser.mockRejectedValue({});
    const store = mockStore(Payload.Success);
    const mockMatch = {
      params: {
        username: 'rubens',
      },
    };
    const Wrapper = mount(
      <Provider store={store}>
        <Results match={mockMatch} />
      </Provider>,
    );
    expect(GithubMock).toHaveBeenCalled();
    expect(Wrapper).toBeDefined();
  });
});
