import * as fromById from './byId/selectors';

export const getAll<%= pluralizeCapitalaze %> = (state) =>
  fromById.getAll<%= pluralizeCapitalaze %>(state.<%= pluralizeLower %>.byId);

export const get<%= capitalazeName %>ById = (state, <%= lowerName %>Id) =>
  fromById.get<%= capitalazeName %>ById(state.<%= pluralizeLower %>.byId, <%= lowerName %>Id);
