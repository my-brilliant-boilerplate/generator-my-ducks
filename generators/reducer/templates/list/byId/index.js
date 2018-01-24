import { handleActions } from 'redux-actions';

import * as constants from '../constants';

const initState = {};

export default handleActions({
  [constants.<%= upperName %>_CREATE]: (state, action) => ({
    ...state,
    [action.<%= lowerName %>.id]: {
      ...action.<%= lowerName %>,
    },
  }),
  [constants.<%= upperName %>_UPDATE]: (state, action) => ({
    ...state,
    [action.<%= lowerName %>.id]: {
      ...action.<%= lowerName %>,
    },
  }),
  [constants.<%= upperName %>_DELETE]: (state, action) => {
    const newState = { ...state };
    delete newState[action.<%= lowerName %>.id];
    return newState;
  },
}, initState);
