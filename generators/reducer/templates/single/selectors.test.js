import store from '../../store';
import * as selectors from './selectors.js';

describe('modules:<%= lowerName %>:selectors', () => {
  it('should return current reducer state', () => {
    const currentStore = selectors.getState(store.getState());

    expect(currentStore).not.toBeUndefined();
  });
});

