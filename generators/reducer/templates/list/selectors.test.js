import store from '../../store';
import * as selectors from './selectors.js';

describe('modules:<%= pluralizeLower %>:selectors', () => {
  it('should return all <%= pluralizeLower %>', () => {
    const <%= lowerName %>s = selectors.getAll<%= pluralizeCapitalaze%>(store.getState());

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

