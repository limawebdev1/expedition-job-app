import { createSelector } from 'reselect';
import { STATE_KEY } from './constants';

export const getAll = state => state[STATE_KEY];
export const getUserApplication = createSelector(getAll, entity => entity.value);