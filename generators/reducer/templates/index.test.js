import store from '../../store';
import * as actions from './actions.js';
import * as selectors from './selectors.js';

describe('modules:test', () => {
  it('should return store', () => {
    const obj = {
      name: 'test-name',
    };

    expect(selectors.getStore(store.getState()).length).toEqual(0);

    store.dispatch(actions.testAction(obj));

    expect(selectors.getStore(store.getState()).length).toEqual(0);
  });
});
