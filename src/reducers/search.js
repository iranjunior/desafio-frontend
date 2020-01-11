import { CHANGE_USER } from '../constants/actions';

const initialState = {
  username: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
