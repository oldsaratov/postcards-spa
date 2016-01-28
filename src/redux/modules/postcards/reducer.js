import postcardsActionTypes from 'redux/constants';

let initialPostcardsState = {
    isFetching: false,
    didInvalidate: false,
    items: []
};

function postcards (state = initialPostcardsState, action) {
    switch (action.type) {
    case postcardsActionTypes.fetchStart:
        return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false
        });
    case postcardsActionTypes.fetchSuccess:
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
