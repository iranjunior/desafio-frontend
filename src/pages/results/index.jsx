import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Container, Header, Content, Information, Repositories,
} from './styles';
import { CHANGE_USERNAME, CHANGE_USER, CHANGE_REPOSITORY } from '../../constants/actions';
import Api from '../../services/api';

import Title from '../../components/Title';
import Search from '../../components/search';
import User from '../../components/User/index';
import Repository from '../../components/Repository/index';

const ResultComponent = ({
  user, repos, match, dispatch, history,
}) => {
  const getUser = async (Api) => {
    try {
      dispatch({
        type: CHANGE_USERNAME || 'CHANGE_USERNAME',
        payload: match.params.username,
      });
      const { data } = await Api.get(`/users/${match.params.username}`);
      dispatch({
        type: CHANGE_USER,
        payload: data,
      });
    } catch (error) {
      console.table(error);
    }
  };
  const getRepos = async () => {
    try {
      if (user.login) {
        const { data } = await Api.get(`/users/${match.params.username}/repos`);
        dispatch({
          type: CHANGE_REPOSITORY,
          payload: data,
        });
        user.startCounts = data.map((el) => el.stargazers_count).reduce((acc, curr) => acc + curr);
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
  return (
    <Container>
      <Header>
        <Title />
        <Search match={match} history={history} />
      </Header>
      <Content>
        <Information>
          <User />
        </Information>
        <Repositories>
          {
            repos.map((repository) => <Repository key={repository.name} repository={repository} />)
          }
        </Repositories>
      </Content>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  ...state,
  user: state.user.user,
  repos: state.repos.repositories,
});

export default connect(mapStateToProps)(ResultComponent);
