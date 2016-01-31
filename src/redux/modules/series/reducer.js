import { seriesActionTypes } from 'redux/constants';

let initialSeriesState = {
    isFetching: false,
    didInvalidate: false,
    items: []
};

function postcards (state = initialSeriesState, action) {
    switch (action.type) {
    case seriesActionTypes.fetchStart:
        return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false
        });
    case seriesActionTypes.fetchSuccess:
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            items: action.records
        });
    default:
        return state;
    }
}

export default postcards;
