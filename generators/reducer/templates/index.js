import * as constants from './constants';

const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case constants.<%= name %>_ADD:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

