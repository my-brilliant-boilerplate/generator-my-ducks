import store from '../../store';
import * as actions from './actions.js';
import * as selectors from './selectors.js';

const id = '<%= lowerName %>-test-id';
describe('modules:<%= pluralizeLower %>', () => {
  it('should create new <%= lowerName %>', () => {
    const <%= lowerName %> = {
      id,
    };

    const count = selectors.getAll<%= pluralizeCapitalaze %>(store.getState()).length;
    const expectedCount = count + 1;

    store.dispatch(actions.create<%= capitalazeName %>(<%= lowerName %>));

    const actualStore = selectors.getAll<%= pluralizeCapitalaze %>(store.getState());

    expect(actualStore).toHaveLength(expectedCount);
  });

  it('should update <%= lowerName %>', () => {
    const <%= lowerName %> = {
      id,
      name: 'new-name'
    };
    const item = selectors.get<%= capitalazeName %>ById(store.getState(), id);
    expect(item.name).not.toEqual(<%= lowerName %>.name);

    store.dispatch(actions.update<%= capitalazeName %>(<%= lowerName %>));

    const actual = selectors.get<%= capitalazeName %>ById(store.getState(), id);

    expect(actual.name).toEqual(<%= lowerName %>.name);
  });

  it('should create new <%= lowerName %>', () => {
    const <%= lowerName %> = {
      id,
    };

    const count = selectors.getAll<%= pluralizeCapitalaze %>(store.getState()).length;
    const expectedCount = count - 1;

    store.dispatch(actions.delete<%= capitalazeName %>(<%= lowerName %>));

    const actualStore = selectors.getAll<%= pluralizeCapitalaze %>(store.getState());

    expect(actualStore).toHaveLength(expectedCount);
  });
});
