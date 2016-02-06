import reduxCrud from 'redux-crud';

// CRUD ACTIONS
export const postcardsActionTypes = reduxCrud.actionTypesFor('postcards');
export const publishersActionTypes = reduxCrud.actionTypesFor('publishers');
export const seriesActionTypes = reduxCrud.actionTypesFor('series');

// CUSTOM ACTIONS
export const SET_SERIES_FILTER = 'SET_SERIES_FILTER';
export const SET_PUBLISHER_FILTER = 'SET_PUBLISHER_FILTER';
