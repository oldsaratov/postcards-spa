import { publishersActionTypes } from 'redux/constants';

let initialPublishersState = {
    isFetching: false,
    didInvalidate: false,
    items: []
};

function publishers (state = initialPublishersState, action) {
    switch (action.type) {
    case publishersActionTypes.fetchStart:
        return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false
        });
    case publishersActionTypes.fetchSuccess:
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            items: action.records
        });
    default:
        return state;
    }
}

export default publishers;
