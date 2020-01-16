import { CHANGE_USERNAME, CHANGE_USER, CHANGE_REPOSITORY } from '../constants/actions';

export const handleUsername = (username) => ({
  type: CHANGE_USERNAME,
  payload: username,
});

export const handleUser = (user) => ({
  type: CHANGE_USER,
  payload: user,
});

export const handleRepos = (repos) => ({
  type: CHANGE_REPOSITORY,
  payload: repos,
});
