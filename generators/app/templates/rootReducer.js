import { combineReducers } from 'redux';
<% reducers.map((reducer) => { %>
  import <%= reducer -%> from './<%= reducer %>';
<% }); %>
const appReducer = combineReducers({
<% reducers.map((reducer, index) => { %>  <%= reducer %>,<% }); %>
});

export default appReducer;

