import * as constants from './constants';

export const add<%= name.charAt(0).toUpperCase() + name.toLowerCase().slice(1) %> = (obj) => ({
  type: constants.<%= name %>_ADD,
  obj,
});

