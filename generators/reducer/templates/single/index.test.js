import store from '../../store';
import * as actions from './actions.js';
import * as selectors from './selectors.js';

describe('modules:<%= lowerName %>', () => {
  it('should return store', () => {
    const expectedName = 'test-name';
    const obj = {
      name: expectedName,
    };

    expect(Object.keys(selectors.getState(store.getState()))).toHaveLength(0);

    store.dispatch(actions.add<%= capitalazeName %>(obj));

    expect(selectors.getState(store.getState()).name).toEqual(expectedName);
  });
});
