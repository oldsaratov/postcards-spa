import { SET_PUBLISHER_FILTER } from 'redux/constants';

export function setPublisherFilter (filter) {
    return {
        type: SET_PUBLISHER_FILTER,
        filter
    };
}
