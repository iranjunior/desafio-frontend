import { CHANGE_UI_SHOWALL } from '../constants/actions';

const initialState = {
  showAll: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_UI_SHOWALL:
      return {
        ...state,
        showAll: action.payload,
      };
    default:
      return state;
  }
};
