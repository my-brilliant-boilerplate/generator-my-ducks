import store from '../../store';
import * as selectors from './selectors.js';

describe('modules:<%= lowerName %>:selectors', () => {
  it('should return all <%= lowerName %>s', () => {
    const <%= lowerName %>s = selectors.getAll<%= capitalazeName %>s(store.getState());

    expect(<%= lowerName %>s).toHaveLength(1);
  });

  it('should return <%= lowerName %> by id', () => {
    const id = 'test-id';
    const expect<%= capitalazeName%> = {
      id,
    };

    const <%= lowerName %> = selectors.get<%= capitalazeName %>ById(store.getState(), id);

    expect(<%= lowerName %>).toEqual(expect<%= capitalazeName%>);
  });
});

