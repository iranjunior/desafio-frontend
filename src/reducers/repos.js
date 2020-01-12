import { CHANGE_REPOSITORY } from '../constants/actions';

const initialState = {
  repositories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_REPOSITORY:
      return {
        ...state,
        repositories: action.payload,
      };
    default:
      return state;
  }
};
