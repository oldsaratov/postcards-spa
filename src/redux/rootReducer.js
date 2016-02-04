import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import postcards from 'redux/modules/postcards/reducer';
import series from 'redux/modules/series/reducer';
import seriesFilter from 'redux/modules/seriesFilter/reducer';

export default combineReducers({
    router,
    postcards,
    series,
    seriesFilter
});
