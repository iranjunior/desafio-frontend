import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Information,
  Repositories,
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

const ResultComponent = ({
  user, repos, match, dispatch, history,
}) => {
  const [userFound, setUserFound] = useState(null);

  const getUser = async (Api) => {
    try {
      setUserFound(null);
      dispatch({
        type: CHANGE_USERNAME || 'CHANGE_USERNAME',
        payload: match.params.username,
      });
      const { status, data } = await Api.get(
        `/users/${match.params.username}`,
      );
      if (status === 200) {
        setUserFound(true);
        dispatch({
          type: CHANGE_USER,
          payload: data,
        });
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
        const { data } = await Api.get(
          `/users/${match.params.username}/repos`,
        );
        user.startCounts = data
          .map((el) => el.stargazers_count)
          .reduce((acc, curr) => acc + curr);
        data.sort((a, b) => {
          if (a.stargazers_count < b.stargazers_count) {
            return 1;
          } if (a.stargazers_count > b.stargazers_count) {
            return -1;
          }
          return 0;
        });
        dispatch({
          type: CHANGE_REPOSITORY,
          payload: data,
        });
        dispatch({
          type: CHANGE_USER,
          payload: user,
        });
      }
    } catch (error) {
      console.table(error);
    }
  };
  useEffect(() => {
    getUser(Api);
  }, [match.params.username]);
  useEffect(() => {
    getRepos();
  }, [user]);

  const RenderItem = () => {
    switch (userFound) {
      case true:
        return (
          <>
            <Information>
              <User />
            </Information>
            <Repositories>
              {repos.map((repository) => (
                <Repository
                  key={repository.name}
                  repository={repository}
                />
              ))}
            </Repositories>
          </>
        );
      case false:
        return <UserNotFound />;
      default:
        return <Loading />;
    }
  };

  return (
    <Container>
      <Header>
        <Title />
        <Search match={match} history={history} />
      </Header>
      <Content>{RenderItem()}</Content>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  ...state,
  user: state.user.user,
  repos: state.repos.repositories,
});

export default connect(mapStateToProps)(ResultComponent);
