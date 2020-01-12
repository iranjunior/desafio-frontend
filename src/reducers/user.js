import { CHANGE_USER } from '../constants/actions';

const initialState = {
  user: {
    name: '',
    avatar_url: '',
    company: '',
    location: '',
    public_repos: 0,
    followers: 0,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
