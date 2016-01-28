import reduxCrud from 'redux-crud';
import _ from 'lodash';
import { checkStatus, parseJSON } from 'redux/helpers/httpStatusHandler';

// ACTIONS

let baseActions = reduxCrud.actionCreatorsFor('postcards');
let postcardsActions = {
    fetch () { // TODO: Add pagination
        return (dispatch, getState) => {
            if (!shouldFetchPostcards(getState())) {
                return;
            }

            dispatch(baseActions.fetchStart());

            return fetch('http://postcards.oldsaratov.ru/api/postcards/getAll')
                .then(checkStatus)
                .then(parseJSON)
                .then(data => dispatch(baseActions.fetchSuccess(data)))
                .catch(function (error) {
                    baseActions.fetchError(error);
                    console.log('Getting all postcards failed', error);
                });
        };
    }
};

postcardsActions = _.extend(postcardsActions, baseActions);

// HELPERS

function shouldFetchPostcards (state) {
    const postcards = state.postcards;

    if (!postcards.items.length) {
        return true;
    } else if (postcards.isFetching) {
        return false;
    } else {
        return postcards.didInvalidate;
    }
}

export default postcardsActions;
