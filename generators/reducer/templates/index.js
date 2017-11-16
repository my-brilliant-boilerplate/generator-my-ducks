import * as constants from './constants';

const initState = [];

export default (state = initState, action) => {
  switch (action.type) {
    case constants.TEST:
      return state;

  default:
      return state;
  };
};

