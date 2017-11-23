import store from '../../store';
import * as actions from './actions.js';
import * as selectors from './selectors.js';

describe('modules:<%= name.toLowerCase() %>', () => {
  it('should return store', () => {
    const expectedName = 'test-name';
    const obj = {
      name: expectedName,
    };

    expect(Object.keys(selectors.getState(store.getState())).length).toEqual(0);

    store.dispatch(actions.add<%= name.charAt(0).toUpperCase() + name.toLowerCase().slice(1) %>(obj));

    expect(selectors.getState(store.getState()).name).toEqual(expectedName);
  });
});
