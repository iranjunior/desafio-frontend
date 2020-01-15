import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../routes/history';
import search from './search';
import user from './user';
import repos from './repos';
import ui from './ui';

export default combineReducers({
  search, user, repos, ui, route: connectRouter(history),
});
