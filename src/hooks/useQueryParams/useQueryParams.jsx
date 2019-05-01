import React from 'react';
import {QueryParamContext} from './QueryParamProvider';
import isEqual from 'lodash/isEqual';
import qs from 'qs';

const initializeQuery = (queryString) => {
  const params = qs.parse(queryString.slice(1));
  return params;
};

const queryReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return { ...state, ...action.payload};
    default:
      return state;
  }
};

const useQueryParams = (props) => {
  const { history, location } = React.useContext(QueryParamContext);
  const [query, dispatchQuery] = React.useReducer(queryReducer, initializeQuery(location.search));
  console.log(query)
  const updateQuery = (payload) => {
    dispatchQuery({ type: "UPDATE", payload });
  }

  React.useEffect(() => {
    const hasQueryChanged = isEqual(prevQuery.current, query);
      if (!hasQueryChanged) {
        history.replace({
          search: qs.stringify(query),
        });
      }
  });

  const prevQuery = React.useRef();
    React.useEffect(() => {
    prevQuery.current = query;
  });


  return {
    query,
    updateQuery,
  }
}

export default useQueryParams;
