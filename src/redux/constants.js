import reduxCrud from 'redux-crud';

// CRUD ACTIONS
export const postcardsActionTypes = reduxCrud.actionTypesFor('postcards');
export const seriesActionTypes = reduxCrud.actionTypesFor('series');

// CUSTOM ACTIONS
export const SET_SERIES_FILTER = 'SET_SERIES_FILTER';
