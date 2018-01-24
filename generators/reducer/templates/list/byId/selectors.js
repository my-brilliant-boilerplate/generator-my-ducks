import values from 'lodash/values';

export const getAllGroups = (state) => values(state);

export const getGroupById = (state, id) => state[id];
