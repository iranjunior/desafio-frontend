import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../routes/history';
import search from './search';
import user from './user';
import repos from './repos';

export default combineReducers({
  search, user, repos, route: connectRouter(history),
});
