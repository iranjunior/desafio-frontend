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

import { handleUsername, handleUser, handleRepos } from '../../dispatchs';
import checkDiff from '../../utils/checkDiff';
import { getUser, getUserRepos } from '../../services/api';
import Title from '../../components/Title';
import Search from '../../components/search';
import UserNotFound from '../../components/NotFound';
import Loading from '../../components/Loading';
import User from '../../components/User/index';
import Repository from '../../components/Repository/index';
import ButtonMore from '../../components/More';

const mapStateToProps = (state) => ({
  ...state,
  user: state.user.user,
  repos: state.repos.repositories,
  showAll: state.ui.showAll,
});

const mapDispatchToProps = (dispatch) => ({
  changeUser: (user) => dispatch(handleUser(user)),
  changeRepos: (repos) => dispatch(handleRepos(repos)),
  changeUsername: (username) => dispatch(handleUsername(username)),
});

const ResultComponent = ({
  user, changeUser, repos, changeRepos, match, changeUsername, showAll, history,
}) => {
  const [userFound, setUserFound] = useState(null);
  const userLocal = JSON.parse(localStorage.getItem(match.params.username)) || '';
  const reposLocal = JSON.parse(localStorage.getItem(`${match.params.username}_repos`)) || '';

  const updateUser = async () => {
    try {
      setUserFound(null);
      changeUsername(match.params.username);

      if (typeof userLocal === 'object') {
        setUserFound(true);
        changeUser(userLocal);
      }
      const response = await getUser(match.params.username);

      if (Object.entries(response).length) {
        setUserFound(true);
        if (!userLocal || checkDiff(userLocal, response)) {
          localStorage.setItem(match.params.username, JSON.stringify(response));
          changeUser(response);
        }
      }
    } catch (error) {
      if (error.response.status === 404) {
        setUserFound(false);
      }
    }
  };
  const updateRepos = async () => {
    try {
      if (user.login) {
        if (typeof reposLocal === 'object') {
          setUserFound(true);
          changeRepos(reposLocal);
        }
        const response = await getUserRepos(match.params.username);
        user.startCounts = response
          .map((el) => el.stargazers_count)
          .reduce((acc, curr) => acc + curr);

        if (Object.entries(response).length) {
          if (!reposLocal || checkDiff(reposLocal, response)) {
            localStorage.setItem(`${match.params.username}_repos`, JSON.stringify(response));
            changeRepos(response);
          }
          if (checkDiff(userLocal, user)) {
            localStorage.setItem(`${match.params.username}`, JSON.stringify(user));
            changeUser(user);
          }
        }
      }
    } catch (error) {}
  };
  useEffect(() => {
    updateUser();
  }, [match.params.username]);
  useEffect(() => {
    updateRepos();
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultComponent);
