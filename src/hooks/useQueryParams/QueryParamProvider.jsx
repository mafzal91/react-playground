import React from 'react';
import { Route } from 'react-router-dom';


const QueryParamContext = React.createContext();

const QueryParamProvider = ({
  children,
}) => {
    return (
      <Route>
        {({history, location}) => {
          return (
            <QueryParamContext.Provider value={{history, location}}>
              {children}
            </QueryParamContext.Provider>
          );
        }}
      </Route>
    );
  }

export { QueryParamContext }
export default QueryParamProvider
