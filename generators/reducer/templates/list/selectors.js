import * as fromById from './byId/selectors';

export const getAll<%= capitalazeName %>s = (state) =>
  fromById.getAll<%= capitalazeName %>s(state.<%= lowerName %>s.byId);

export const get<%= capitalazeName %>ById = (state, <%= lowerName %>Id) =>
  fromById.get<%= capitalazeName %>ById(state.<%= lowerName  %>s.byId, <%= lowerName %>Id);
