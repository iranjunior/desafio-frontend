import Axios from 'axios';

const Api = Axios.create({
  baseURL: process.env.REACT_APP_GITHUB_BASEURL,
  timeout: process.env.REACT_APP_GITHUB_TIMEOUT,
});

export const getUser = async (username) => {
  try {
    const response = await Api.get(`/users/${username}`);

    return response.data;
  } catch (error) {
    return {};
  }
};
export const getUserRepos = async (username) => {
  try {
    const response = await Api.get(`/users/${username}/repos`);

    response.data.sort((a, b) => {
      if (a.stargazers_count < b.stargazers_count) {
        return 1;
      }
      if (a.stargazers_count > b.stargazers_count) {
        return -1;
      }
      return 0;
    });

    return response.data;
  } catch (error) {
    return {};
  }
};
