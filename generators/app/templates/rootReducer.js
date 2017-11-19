import { combineReducers } from 'redux';
<%_ reducers.map((reducer) => { _%>
import <%= reducer -%> from './<%= reducer %>';
<%_ }); _%>
// import reducer from './reducer';

const appReducer = combineReducers({
<%_ reducers.map((reducer) => { _%>
  <%= reducer + ',' %>
<%_ }); _%>
  // reducer,
});

export default appReducer;

