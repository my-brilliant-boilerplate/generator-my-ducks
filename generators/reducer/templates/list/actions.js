import * as constants from './constants';

export const create<%= capitalazeName %> = (<%= lowerName %>) => ({
  type: constants.<%= upperName %>_CREATE,
  <%= lowerName %>,
});

export const update<%= capitalazeName %> = (<%= lowerName %>) => ({
  type: constants.<%= upperName %>_UPDATE,
  <%= lowerName %>,
});

export const delete<%= capitalazeName %> = (<%= lowerName %>) => ({
  type: constants.<%= upperName %>_DELETE,
  <%= lowerName %>,
});
