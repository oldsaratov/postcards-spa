import { SET_PUBLISHER_FILTER } from 'redux/constants';

const SHOW_ALL = 'ALL';

function publisherFilter (state = SHOW_ALL, action) {
    switch (action.type) {
    case SET_PUBLISHER_FILTER:
        return action.filter;
    default:
        return state;
    }
}

export default publisherFilter;
