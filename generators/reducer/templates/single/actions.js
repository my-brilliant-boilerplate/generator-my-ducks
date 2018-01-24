import * as constants from './constants';

export const add<%= capitalazeName %> = (data) => ({
  type: constants.<%= upperName %>_ADD,
  data,
});
