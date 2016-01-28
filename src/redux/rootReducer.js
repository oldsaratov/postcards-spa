import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import postcards from 'redux/modules/postcards/reducer';

export default combineReducers({
    router,
    postcards
});
