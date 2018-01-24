import { handleActions } from 'redux-actions';

import * as constants from './constants';

const initState = {};

export default handleActions({
  [constants.<%= upperName %>_ADD]: (state, action) => ({
    ...state,
    ...action.data,
  }),
}, initState);
