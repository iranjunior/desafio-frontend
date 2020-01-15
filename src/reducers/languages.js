import { CHANGE_LANGUAGE } from '../constants/actions';

const initialState = {
  language: 'english',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
