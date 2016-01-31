import { SET_SERIES_FILTER } from 'redux/constants';

const SHOW_ALL = 'ALL';

function seriesFilter (state = SHOW_ALL, action) {
    switch (action.type) {
    case SET_SERIES_FILTER:
        return action.filter;
    default:
        return state;
    }
}

export default seriesFilter;
