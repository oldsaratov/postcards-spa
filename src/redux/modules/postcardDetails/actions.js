import reduxCrud from 'redux-crud';
import _ from 'lodash';
import { checkStatus, parseJSON } from 'redux/helpers/httpStatusHandler';

// ACTIONS

let baseActions = reduxCrud.actionCreatorsFor('postcardDetails');
let postcardDetailsActions = {
    fetch (id) {
        return (dispatch, getState) => {
            dispatch(baseActions.fetchStart());

            return fetch('http://postcards.oldsaratov.ru/api/postcards/GetById/' + id)
                .then(checkStatus)
                .then(parseJSON)
                .then(data => dispatch(baseActions.fetchSuccess(data)))
                .catch(function (error) {
                    baseActions.fetchError(error);
                    console.log('Getting postcard failed', error);
                });
        };
    }
};

postcardDetailsActions = _.extend(postcardDetailsActions, baseActions);

export default postcardDetailsActions;
