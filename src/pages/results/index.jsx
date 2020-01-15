import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Information,
  RepositoriesSpace,
  Repositories,
  BottomSpace,
} from './styles';
import {
  CHANGE_USERNAME,
  CHANGE_USER,
  CHANGE_REPOSITORY,
} from '../../constants/actions';
import Api from '../../services/api';

import Title from '../../components/Title';
import Search from '../../components/search';
import UserNotFound from '../../components/NotFound';
import Loading from '../../components/Loading';
import User from '../../components/User/index';
import Repository from '../../components/Repository/index';
import ButtonMore from '../../components/More';

const ResultComponent = ({
  user, repos, match, showAll, dispatch, history,
}) => {
  const [userFound, setUserFound] = useState(null);
  const userLocal = JSON.parse(localStorage.getItem(match.params.username)) || '';
  const reposLocal = JSON.parse(localStorage.getItem(`${match.params.username}_repos`)) || '';

  const getUser = async (Api) => {
    try {
      setUserFound(null);
      dispatch({
        type: CHANGE_USERNAME || 'CHANGE_USERNAME',
        payload: match.params.username,
      });

      if (typeof userLocal === 'object') {
        setUserFound(true);
        dispatch({
          type: CHANGE_USER,
          payload: userLocal,
        });
      }
      const { status, data } = await Api.get(
        `/users/${match.params.username}`,
      );
      if (status === 200) {
        setUserFound(true);
        if (!userLocal || !Object.values(data).every((value) => Object.values(userLocal).includes(value))) {
          localStorage.setItem(match.params.username, JSON.stringify(data));
          dispatch({
            type: CHANGE_USER,
            payload: data,
          });
        }
      }
    } catch (error) {
      if (error.response.status === 404) {
        setUserFound(false);
      }
    }
  };
  const getRepos = async () => {
    try {
      if (user.login) {
        if (typeof reposLocal === 'object') {
          setUserFound(true);
          dispatch({
            type: CHANGE_REPOSITORY,
            payload: reposLocal,
          });
        }
        const { status, data } = await Api.get(
          `/users/${match.params.username}/repos`,
        );
        user.startCounts = data
          .map((el) => el.stargazers_count)
          .reduce((acc, curr) => acc + curr);
        data.sort((a, b) => {
          if (a.stargazers_count < b.stargazers_count) {
            return 1;
          }
          if (a.stargazers_count > b.stargazers_count) {
            return -1;
          }
          return 0;
        });
        if (status === 200) {
          if (!reposLocal || !data.every((value) => reposLocal.includes(value))) {
            localStorage.setItem(`${match.params.username}_repos`, JSON.stringify(data));
            dispatch({
              type: CHANGE_REPOSITORY,
              payload: data,
            });
          }
          if (!Object.values(userLocal).every((value) => Object.values(user).includes(value)) === false) {
            localStorage.setItem(`${match.params.username}`, JSON.stringify(user));
            dispatch({
              type: CHANGE_USER,
              payload: user,
            });
          }
        }
      }
    } catch (error) {}
  };
  useEffect(() => {
    getUser(Api);
  }, [match.params.username]);
  useEffect(() => {
    getRepos();
  }, [user]);

  const RenderItem = useCallback(() => {
    switch (userFound) {
      case true:
        return (
          <>
            <Information>
              <User />
            </Information>
            <RepositoriesSpace>
              <Repositories>
                {repos.length < 6 || showAll
                  ? repos.map((repository) => (
                    <Repository
                      key={repository.name}
                      repository={repository}
                    />
                  ))
                  : repos
                    .slice(0, 5)
                    .map((repository) => (
                      <Repository
                        key={repository.name}
                        repository={repository}
                      />
                    ))}
              </Repositories>
              {
                repos.length >= 6 && (
                <BottomSpace>
                  <ButtonMore />
                </BottomSpace>
                )
              }
            </RepositoriesSpace>

          </>
        );
      case false:
        return <UserNotFound />;
      default:
        return <Loading />;
    }
  }, [showAll, userFound, repos]);

  return (
    <Container>
      <Header>
        <Title position="initial" history={history} link="actived" />
        <Search match={match} history={history} />
      </Header>
      <Content>
        {RenderItem()}
      </Content>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  ...state,
  user: state.user.user,
  repos: state.repos.repositories,
  showAll: state.ui.showAll,
});

export default connect(mapStateToProps)(ResultComponent);
