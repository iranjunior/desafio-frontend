import { CHANGE_USERNAME } from '../constants/actions';

const initialState = {
  username: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
