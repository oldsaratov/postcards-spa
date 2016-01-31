import reduxCrud from 'redux-crud';
import _ from 'lodash';
import { checkStatus, parseJSON } from 'redux/helpers/httpStatusHandler';

// ACTIONS

let baseActions = reduxCrud.actionCreatorsFor('series');
let seriesActions = {
    fetch () {
        return (dispatch, getState) => {
            dispatch(baseActions.fetchStart());

            return fetch('http://postcards.oldsaratov.ru/api/series/getAll')
                .then(checkStatus)
                .then(parseJSON)
                .then(data => dispatch(baseActions.fetchSuccess(data)))
                .catch(function (error) {
                    baseActions.fetchError(error);
                    console.log('Getting all series failed', error);
                });
        };
    }
};

seriesActions = _.extend(seriesActions, baseActions);

export default seriesActions;
