import { SET_SERIES_FILTER } from 'redux/constants';

export function setSeriesFilter (filter) {
    return {
        type: SET_SERIES_FILTER,
        filter
    };
}
