import { combineReducers } from "redux";
import leads from './leads';
import errors from './errors';

//pass in an object of any reducers that we have, like leads reducer
export default combineReducers({
    leads,
    errors
});
