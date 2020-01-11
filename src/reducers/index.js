import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../routes/history';
import search from './search';

export default combineReducers({ search, route: connectRouter(history) });
