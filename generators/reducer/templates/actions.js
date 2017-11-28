import * as constants from './constants';

export const add<%= name.charAt(0).toUpperCase() + name.toLowerCase().slice(1) %> = (data) => ({
  type: constants.<%= name %>_ADD,
  data,
});

