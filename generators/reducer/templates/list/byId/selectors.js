import values from 'lodash/values';

export const getAll<%= pluralizeCapitalaze %> = (state) => values(state);

export const get<%= capitalazeName %>ById = (state, id) => state[id];

