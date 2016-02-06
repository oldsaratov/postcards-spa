import reduxCrud from 'redux-crud';
import _ from 'lodash';
import { checkStatus, parseJSON } from 'redux/helpers/httpStatusHandler';

// ACTIONS

let baseActions = reduxCrud.actionCreatorsFor('publishers');
let publishersActions = {
    fetch () {
        return (dispatch, getState) => {
            if (!shouldFetchPublishers(getState())) {
                return;
            }

            dispatch(baseActions.fetchStart());

            return fetch('http://postcards.oldsaratov.ru/api/publishers/getAll')
                .then(checkStatus)
                .then(parseJSON)
                .then(data => dispatch(baseActions.fetchSuccess(data)))
                .catch(function (error) {
                    baseActions.fetchError(error);
                    console.log('Getting all publishers failed', error);
                });
        };
    }
};

publishersActions = _.extend(publishersActions, baseActions);

// HELPERS

function shouldFetchPublishers (state) {
    const publishers = state.publishers;

    if (!publishers.items.length) {
        return true;
    } else if (publishers.isFetching) {
        return false;
    } else {
        return publishers.didInvalidate;
    }
}

export default publishersActions;
