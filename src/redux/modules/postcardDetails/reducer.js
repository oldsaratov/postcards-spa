import { postcardDetailsActionTypes } from 'redux/constants';

let initialPostcardDetailsState = {
    isFetching: false,
    entity: {}
};

function postcardDetails (state = initialPostcardDetailsState, action) {
    switch (action.type) {
    case postcardDetailsActionTypes.fetchStart:
        return Object.assign({}, state, {
            isFetching: true
        });
    case postcardDetailsActionTypes.fetchSuccess:
        return Object.assign({}, state, {
            isFetching: false,
            entity: action.records
        });
    default:
        return state;
    }
}

export default postcardDetails;
