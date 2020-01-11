import { CHANGE_USER } from '../constants/actions';

const initialState = {
  user: '',
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
